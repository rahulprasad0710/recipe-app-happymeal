import React, { useContext } from "react"
import Layout from "../components/Layout"
import AppContext from "../context/AppContext"

const Search = () => {
  const { recipe } = useContext(AppContext)
  console.log(recipe)
  return (
    <Layout>
      <section>
        <h3>This is our Search page</h3>
      </section>
    </Layout>
  )
}

export default Search
