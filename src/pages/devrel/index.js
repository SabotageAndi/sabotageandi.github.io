import React from "react"
import { graphql } from "gatsby"

import ArticleList from "../../components/article-list"


const IndexPage = ({ data }) => {
  return (
    <ArticleList data={data} title="Dev Rel"/>
  )
}

export default IndexPage

export const query = graphql`
query 
{
  site {
    siteMetadata {
      title
    }
  }
  allMdx(
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {fileAbsolutePath: {regex: "/.*devrel.*/"}}
  ) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
        }
        excerpt
        slug
      }
    }
  }
}
`
