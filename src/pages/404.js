import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>This article wasn't found</h1>
    <p>Sorry, some urls changed. Please look for the article manually</p>
  </Layout>
)

export default NotFoundPage
