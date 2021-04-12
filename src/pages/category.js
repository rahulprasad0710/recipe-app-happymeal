import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import slugify from "slugify"
import Layout from "../components/Layout"
import Seo from "../seo/Seo"

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
  let catNow = " "
  const catgData = sortedData.map((e, i) => {
    const slug = slugify(e.title, { lower: true })
    if (e.category === catNow) {
      return (
        <Link to={`/recipes/${slug}`} className="page-main-onerecipe">
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
      catNow = e.category
      return (
        <>
          <h2 className="page-cat-category"> {e.category}</h2>
          <Link to={`/recipes/${slug}`} className="page-main-onerecipe">
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
      <Seo title={"Category"} description={"recipe category"} />
      <section className="container-lg">
        <div className="page-main-allrecipe">{catgData}</div>
      </section>
    </Layout>
  )
}

export default Trending
