import React, { useState } from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import marked from "marked"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const RecipeTemplate = props => {
  console.log(props)
  const { contentfulRecipe } = props.data
  const recipeDescription = marked(contentfulRecipe.description.description)
  return (
    <Layout>
      <section className="page-onerecipe container-lg">
        <div>
          {contentfulRecipe && (
            <div>
              <h3>{contentfulRecipe.title}</h3>
              <GatsbyImage
                image={contentfulRecipe.recipeimage.gatsbyImageData}
                alt={contentfulRecipe.title}
                className="onerecipe-food-img"
              />

              <section
                className="oneRecipe-description"
                dangerouslySetInnerHTML={{ __html: recipeDescription }}
              />
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export const oneRecipeQuery = graphql`
  query MyQuery($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      id
      description {
        description
      }
      tag {
        tagall
      }
      cookTime
      prepTime
      recipeimage {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: DOMINANT_COLOR
          width: 600
          height: 400
        )
      }
    }
  }
`

export default RecipeTemplate
