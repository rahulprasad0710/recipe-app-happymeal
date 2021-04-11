import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"

const categoryQuery = graphql`
  {
    allContentfulRecipe(sort: { fields: category }) {
      nodes {
        title
        category
        tag {
          tagall
        }
      }
    }
  }
`

const Trending = () => {
  const fetchData = useStaticQuery(categoryQuery)
  const sortedData = fetchData.allContentfulRecipe.nodes

  let catNow = " "
  console.log(`outmap ${catNow}`)

  const catgData = sortedData.map((e, i) => {
    console.log(`inmap ${catNow}`)
    if (e.category == catNow) {
      console.log("same cats")

      return (
        <div>
          <h3>{e.title}</h3>
          <h4>
            Tag:{" "}
            {e.tag.tagall.map(e => (
              <p>{e}</p>
            ))}
          </h4>
        </div>
      )
    } else {
      console.log("diff cat")
      catNow = e.category
      console.log(`diff ${catNow}`)
      return (
        <div>
          <h2>Category: {e.category}</h2>
          <h3>{e.title}</h3>
          <h4>
            Tag:
            {e.tag.tagall.map(e => (
              <p>{e}</p>
            ))}
          </h4>
        </div>
      )
    }
  })

  return (
    <Layout>
      <section>{catgData}</section>
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
