import React from "react"
import Layout from "../components/Layout"
import Seo from "../seo/Seo"
const Recipe = () => {
  return (
    <Layout>
      <Seo title={"About Page"} description={"About Page"} />
      <section className="page-recipe container-lg">
        <h2 className="page-cat-category"> About</h2>
      </section>
    </Layout>
  )
}

export default Recipe
