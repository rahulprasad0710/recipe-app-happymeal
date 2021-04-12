import React from "react"
import { Helmet } from "react-helmet"

const Seo = ({ title, description }) => {
  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}

export default Seo
