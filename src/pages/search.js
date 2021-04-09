import React, { useContext, useState, useEffect, useLayoutEffect } from "react"
import axios from "axios"
import Layout from "../components/Layout"
import AppContext from "../context/AppContext"
import slugify from "slugify"
import { Link } from "gatsby"

const Search = () => {
  const { recipe } = useContext(AppContext)

  const [fetchData, setFetchData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {}, [recipe])

  useLayoutEffect(() => {
    const fetchData = async () => {
      const apiUrl = `https://api.edamam.com/search?q=${recipe}&app_id=59dcc006&app_key=0450fce352acf1f5e7b9ae3180027248`
      try {
        const response = await axios.get(apiUrl)
        setFetchData(response)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [recipe])

  console.log(fetchData)
  if (fetchData) {
    var oneRecipeMain = fetchData.data.hits.map(oneRecipe => {
      return (
        <Link key={oneRecipe.recipe.label} to="/">
          <h3>{oneRecipe.recipe.label}</h3>
          <img
            src={oneRecipe.recipe.image}
            alt={oneRecipe.recipe.label}
            style={{ width: "300px" }}
          />
        </Link>
      )
    })
  }

  return (
    <Layout>
      <section>
        <h6 className="text-info text-center">
          {isLoading && <span className="text-danger">Loading.... </span>}
          {fetchData && <div className="text-danger">{oneRecipeMain}</div>}
        </h6>
      </section>
    </Layout>
  )
}

export default Search
