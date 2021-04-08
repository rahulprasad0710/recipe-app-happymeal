import React, { useContext } from "react"
import Layout from "../components/Layout"
import AppContext from "../context/SearchContext"

const Search = () => {
  const { searchValueFn } = useContext(AppContext)
  console.log(searchValueFn)
  return (
    <Layout>
      <section>
        <h3>This is our Search page</h3>
      </section>
    </Layout>
  )
}

export default Search
