import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const RecipeTemplate = props => {
  return (
    <div>
      <h2>{props.pageContext.title}</h2>
    </div>
  )
}

export default RecipeTemplate
