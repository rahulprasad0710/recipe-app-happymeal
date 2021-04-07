import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const GraphData = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        info: siteMetadata {
          author
          description
          simpleData
          title
          person {
            name
          }
        }
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default GraphData
