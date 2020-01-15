import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const Title = styled.h1`
  color: var(--text-title);
  font-weight: bolder;
`

const BlogPage = () => (
  <Layout theme="">
    <SEO title="Blog" />
    <Title>Blog</Title>
    <Link to="/">Go back to Homepage</Link>
    <p>
      To be done
      {/* // TODO: Add list of posts grouped by year */}
    </p>
  </Layout>
)

export default BlogPage