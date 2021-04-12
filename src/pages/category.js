import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"

const categoryQuery = graphql`
  {
    allContentfulRecipe(sort: { fields: category, order: DESC }) {
      nodes {
        id
        category
        title
        tag {
          tagall
        }
        recipeimage {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`

const Trending = () => {
  const fetchData = useStaticQuery(categoryQuery)
  const sortedData = fetchData.allContentfulRecipe.nodes
  console.log(fetchData)
  let catNow = " "
  console.log(`outmap ${catNow}`)

  const catgData = sortedData.map((e, i) => {
    console.log(`inmap ${catNow}`)
    if (e.category == catNow) {
      console.log("same cats")

      return (
        <Link className="page-main-onerecipe">
          <h2>{e.title}</h2>
          <GatsbyImage
            image={e.recipeimage.gatsbyImageData}
            alt={e.title}
            className="mainall-food-img"
          />
          <h4>
            Tag:{" "}
            {e.tag.tagall.map(e => (
              <span> #{e} &nbsp; </span>
            ))}
          </h4>
        </Link>
      )
    } else {
      console.log("diff cat")
      catNow = e.category
      console.log(`diff ${catNow}`)
      return (
        <>
          <h2 className="page-cat-category"> {e.category}</h2>
          <Link className="page-main-onerecipe">
            <h2>{e.title}</h2>
            <GatsbyImage
              image={e.recipeimage.gatsbyImageData}
              alt={e.title}
              className="mainall-food-img"
            />

            <h4>
              Tag:
              {e.tag.tagall.map(e => (
                <span>#{e} &nbsp;</span>
              ))}
            </h4>
          </Link>
        </>
      )
    }
  })

  return (
    <Layout>
      <section className="container-lg">
        <div className="page-main-allrecipe">{catgData}</div>
      </section>
    </Layout>
  )
}

export default Trending
