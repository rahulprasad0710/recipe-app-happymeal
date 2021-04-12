import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import marked from "marked"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../../seo/Seo"
const RecipeTemplate = props => {
  console.log(props)
  const { contentfulRecipe } = props.data
  const recipeDescription = marked(contentfulRecipe.description.description)
  return (
    <Layout>
      <Seo
        title={contentfulRecipe.title}
        description={contentfulRecipe.title}
      />
      <section className="page-onerecipe container-lg">
        <div>
          {contentfulRecipe && (
            <div>
              <h1 className="oneRecipe-heading">{contentfulRecipe.title}</h1>
              <div className="imageBox">
                <GatsbyImage
                  image={contentfulRecipe.recipeimage.gatsbyImageData}
                  alt={contentfulRecipe.title}
                  className="onerecipe-food-img"
                />{" "}
              </div>

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
        )
      }
    }
  }
`

export default RecipeTemplate
