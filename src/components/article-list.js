import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

import Layout from "./layout"
import Seo from "./seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const ArticleDate = styled.h5`
  display: inline;
  color: #606060;
  margin-bottom: 10px;
`

const MarkerHeader = styled.h3`
  display: inline;
  border-radius: 1em 0 1em 0;
  margin-bottom: 10px;
  background-image: linear-gradient(
    -100deg,
    rgba(255, 250, 150, 0.15),
    rgba(255, 250, 150, 0.8) 100%,
    rgba(255, 250, 150, 0.25)
  );
`


const ArticleList = ({ data, title }) => {
  return (
    <Layout>
      <Seo title={title} />
      <Content>
        <h1>Articles about {title}</h1>
        {data.allMdx.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <MarkerHeader>{node.frontmatter.title} </MarkerHeader>
              <div>
                <ArticleDate>{node.frontmatter.date}</ArticleDate>
              </div>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </Content>
    </Layout>
  )
}

export default ArticleList
