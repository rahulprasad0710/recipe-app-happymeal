import React, { useContext, useState, useEffect } from "react"
import axios from "axios"
import { LazyLoadImage } from "react-lazy-load-image-component"
import Layout from "../components/Layout"
import AppContext from "../context/AppContext"
import slugify from "slugify"
import { Link } from "gatsby"
import Seo from "../seo/Seo"
import "../asset/css/searchPage.css"

const Search = () => {
  const { recipe } = useContext(AppContext)
  const [fetchData, setFetchData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
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
        <Link className="one-search-recipe" key={oneRecipe.recipe.label} to="/">
          <h3>{oneRecipe.recipe.label}</h3>

          <LazyLoadImage
            alt={oneRecipe.recipe.label}
            src={oneRecipe.recipe.image}
            width={300}
          />
        </Link>
      )
    })
  }

  return (
    <Layout>
      <Seo title={"search for recipe"} description={"recipe search page"} />
      {fetchData && (
        <h3 className=" search-page-searchItem container-md">
          Searched for {recipe}
        </h3>
      )}
      <section className=" search-page-section container-md">
        {isLoading && <span className="text-danger">Loading.... </span>}

        {fetchData && <div className="all-search-recipe">{oneRecipeMain}</div>}
      </section>
    </Layout>
  )
}

export default Search
