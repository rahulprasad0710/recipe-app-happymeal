import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./index.css"
import "../asset/css/mainPage.css"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"

const allRecipeQuery = graphql`
  {
    allContentfulRecipe {
      nodes {
        id
        title
        cookTime
        prepTime
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
  console.log(recipeNode)
  console.log()

  const oneRecipeMain = recipeNode.map(oneRecipe => (
    <div key={oneRecipe.id} className="page-main-onerecipe">
      <h2>{oneRecipe.title}</h2>
      <GatsbyImage
        image={oneRecipe.recipeimage.gatsbyImageData}
        alt={oneRecipe.recipeimage.title}
      />
      <p>{oneRecipe.tag.tagIntro} </p>
      <Link to={`/recipes/${oneRecipe.id}`}>
        <button> Read More... </button>
      </Link>
    </div>
  ))

  return (
    <Layout>
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
      <h1 className="text-center">TODAY'S MENU</h1>
      <div className="page-main-allrecipe container ">{oneRecipeMain}</div>
    </Layout>
  )
}
