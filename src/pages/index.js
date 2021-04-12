import React from "react"
import slugify from "slugify"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import "./index.css"
import "../asset/css/mainPage.css"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import TodaysMenu from "../components/TodaysMenu"
import Seo from "../seo/Seo"

const allRecipeQuery = graphql`
  {
    allContentfulRecipe {
      nodes {
        id
        title
        cookTime
        prepTime
        category
        recipeimage {
          title
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
        tag {
          tagIntro
          tagall
        }
      }
    }
  }
`

export default function Home() {
  const recipeFullData = useStaticQuery(allRecipeQuery)
  const recipeNode = recipeFullData.allContentfulRecipe.nodes

  const oneRecipeMain = recipeNode.map(oneRecipe => {
    const slug = slugify(oneRecipe.title, { lower: true })

    return (
      <Link
        to={`/recipes/${slug}`}
        key={oneRecipe.id}
        className="page-main-onerecipe"
      >
        <h2>{oneRecipe.title}</h2>
        <GatsbyImage
          image={oneRecipe.recipeimage.gatsbyImageData}
          alt={oneRecipe.recipeimage.title}
          className="mainall-food-img"
        />
        <div>
          <h5>Prep Time : {oneRecipe.prepTime} min</h5>
          <h5>Cook Time : {oneRecipe.cookTime} min</h5>
          <h5>Category : {oneRecipe.category}</h5>
        </div>
      </Link>
    )
  })

  return (
    <Layout>
      <Seo title={"Home Page"} description={"recipe site"} />
      <div className="page-main">
        <section className="section-1">
          <header className="heading">LOVE AT FIRST BITE</header>
          <StaticImage
            src="../asset/images/momo-cut.jpg"
            alt="food"
            placeholder="blurred"
            layout="fullWidth"
            className="main-food-img"
            height="300px"
          />
        </section>
      </div>
      <h1 className=" page-cat-category page-today-heading container-lg">
        TODAY'S RECIPE
      </h1>
      <TodaysMenu />
      <h1 className=" page-cat-category page-today-heading container-lg">
        MOST POPULAR
      </h1>
      <div className="page-main-allrecipe container-lg ">{oneRecipeMain}</div>
    </Layout>
  )
}
