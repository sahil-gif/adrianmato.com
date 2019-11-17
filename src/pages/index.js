/**
 * Homepage of the website
 */

import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from '@emotion/styled'

// styled components
const Title = styled.h1`
  color: var(--textTitle);
  font-weight: bolder;
`
const Subtitle = styled.h2`
  color: var(--brandingColor);
  font-family: var(--font-serif);
`
const Bio = styled.p``

const IndexPage = () => (
  <Layout theme="cocoa">
    <SEO title="false" />
    <Title>Adrián Mato</Title>
    <Subtitle>
      Designing <span className="ampersand">&amp;</span> building tools for
      developers at GitHub.
    </Subtitle>
    <Bio>
      For the last 12+ years, I've designed digital products between Madrid,
      London and now, from San Francisco. I also co-founded and later sold my
      company Erasmusu.
    </Bio>
    <Bio>
      My career started as a Software Developer but it soon became clear that my
      true passion was Design. I love combining both skillsets to create
      products that fulfill a clear purpose.
    </Bio>
  </Layout>
)

export default IndexPage
