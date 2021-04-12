import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import marked from "marked"
import { GatsbyImage } from "gatsby-plugin-image"
import "../asset/css/todayMenu.css"

const todayQuery = graphql`
  {
    contentfulRecipe(category: { eq: "soup" }) {
      id
      title
      recipeimage {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
      description {
        description
      }
      tag {
        tagall
      }
      prepTime
      cookTime
    }
  }
`

const Gallery = () => {
  const data = useStaticQuery(todayQuery)

  const todayRecipe = data.contentfulRecipe
  const recipeDescription = marked(todayRecipe.description.description)

  console.log(todayRecipe)
  return (
    <div className="page-today container-lg">
      <section className="section-1t">
        <GatsbyImage
          image={todayRecipe.recipeimage.gatsbyImageData}
          alt={todayRecipe.title}
          className="today-page-img"
        />
        <h2 className="today-page-title">{todayRecipe.title}</h2>
        <h4>Prep Time : {todayRecipe.prepTime} min</h4>
        <h4>Cook Time :{todayRecipe.cookTime} min</h4>
        <h4>
          {todayRecipe.tag.tagall.map(e => (
            <span className="today-page-tagall">#{e} &nbsp;</span>
          ))}
        </h4>
      </section>
      <section>
        <div
          className="section-2t today-page-description"
          dangerouslySetInnerHTML={{ __html: recipeDescription }}
        />
        <button className="today-page-btn">Read More</button>
      </section>
    </div>
  )
}

export default Gallery
