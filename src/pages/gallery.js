import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../asset/css/galleryPage.css"
import Layout from "../components/Layout"

const galleryQuery = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      nodes {
        name
        id
        childImageSharp {
          gatsbyImageData(width: 450, layout: FULL_WIDTH, placeholder: BLURRED)
          fluid(maxWidth: 400, fit: COVER, maxHeight: 300) {
            srcSet
          }
        }
      }
    }
  }
`

const Gallery = () => {
  const data = useStaticQuery(galleryQuery)
  const allImage = data.allFile.nodes

  const eachImgItem = allImage.map(eachImg => {
    const pathToImage = getImage()

    return (
      <div className="gallery-image-item" key={eachImg.id}>
        <GatsbyImage
          image={eachImg.childImageSharp.gatsbyImageData}
          alt={eachImg.id}
        />
      </div>
    )
  })

  return (
    <Layout>
      <div className="gallery-container container-lg">
        <h2 className="page-cat-category"> GALLERY</h2>
        <div className="gallery-grid">{eachImgItem}</div>
      </div>
    </Layout>
  )
}

export default Gallery
