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
              <p>{e}</p>
            ))}
          </h4>
        </Link>
      )
    } else {
      console.log("diff cat")
      catNow = e.category
      console.log(`diff ${catNow}`)
      return (
        <div>
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
                <p>{e}</p>
              ))}
            </h4>
          </Link>
        </div>
      )
    }
  })

  return (
    <Layout>
      <section className="container-lg">
        <h1>CATEGORY :</h1>
        {catgData}
      </section>
    </Layout>
  )
}

export default Trending

// const catData = sortedData.map(e => {
//   var catName = ""
//   if (e.category == catName) {
//     catName = e.category
//     return (
//       <div>
//         <h3>e.title</h3>
//         <h4>
//           {e.tag.tagall.map(e => (
//             <h5>{e}</h5>
//           ))}
//         </h4>
//       </div>
//     )
//   } else {
//     catName = e.category
//     console.log(e.category)
//     return <h2>{e.category}</h2>
//   }
// })
