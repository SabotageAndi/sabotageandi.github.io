import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const MarkedHeader = styled.h1`
  display: inline;
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    rgba(255, 250, 150, 0.15),
    rgba(255, 250, 150, 0.8) 100%,
    rgba(255, 250, 150, 0.25)
  );
`

const HeaderDate = styled.h3`
  margin-top: 10px;
  color: #606060;
`

// STYLE THE TAGS INSIDE THE MARKDOWN HERE
const MarkdownContent = styled.div`
  a {
    text-decoration: none;
    position: relative;
  }

  a::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 70%;
    left: -0.1px;
    right: -0.1px;
    bottom: 0;
    transition: top 0.1s ease-in-out;
    background-color: rgba(255, 250, 150, 0.8);
  }

  a:hover::after {
    top: 0;
  }
`

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.description || data.mdx.excerpt}
      />
      <Content>
        <MarkedHeader>{data.mdx.frontmatter.title}</MarkedHeader>
        <HeaderDate>
          {data.mdx.frontmatter.date}
        </HeaderDate>
        <MDXRenderer>
              {node.body}
        </MDXRenderer>
      </Content>
    </Layout>
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