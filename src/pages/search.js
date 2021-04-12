import React, { useContext, useState, useLayoutEffect } from "react"
import axios from "axios"
import Layout from "../components/Layout"

import AppContext from "../context/AppContext"

import { Link } from "gatsby"

const Search = () => {
  const { recipe } = useContext(AppContext)

  const [fetchData, setFetchData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

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
        <Link
          className="page-main-onerecipe"
          key={oneRecipe.recipe.label}
          to="/"
        >
          <h2>{oneRecipe.recipe.label}</h2>

          <img
            src={oneRecipe.recipe.image}
            alt={oneRecipe.recipe.label}
            className="mainall-food-img"
          />
          <p>
            {oneRecipe.recipe.dishType &&
              oneRecipe.recipe.dishType.map(ele => (
                <span>Dish Type : {ele}</span>
              ))}
          </p>
          <p>
            {oneRecipe.recipe.cuisineType &&
              oneRecipe.recipe.cuisineType.map(ele => (
                <span>Cuisine Type : {ele}</span>
              ))}
          </p>
        </Link>
      )
    })
  }

  return (
    <Layout>
      <section className="container-lg">
        {!(recipe === "") && <h5>Searched for {recipe} </h5>}
        <div>
          {isLoading && <div className="container-lg ">Loading.... </div>}
          {fetchData && (
            <div className="page-main-allrecipe  ">{oneRecipeMain}</div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default Search
