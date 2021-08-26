import React from "react"
import { graphql } from "gatsby"
import Article from "../../components/article"


const BlogPost = ({ data }) => {
  return (<Article data= {data}/>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      id
      body
      slug
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
      }
    }
  }
`

export default BlogPost;