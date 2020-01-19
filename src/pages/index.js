// TODO: Review what dependencies are needed or not in `package.json`
import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"


// styled components
const Title = styled.h1`
  color: var(--text-title);
  font-weight: bolder;
`
const Subtitle = styled.h2`
  color: var(--text-branding);
  font-family: var(--font-serif);
`
const Bio = styled.p``

const Navigation = styled.nav``

const IndexPage = () => (
  <Layout theme="">
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
    {/* TODO: Put this inside a component? */}
    <Navigation>
      <ul>
      {/* TODO: grab values from configuration of the site */}
        <li><a href="#home-work">Portfolio</a></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><a href="https://linkedin.com/in/adrianmg">Resume</a></li>
        <li><a href="https://github.com/adrianmg">GitHub</a></li>
        <li><a href="https://twitter.com/adrianmg">Twitter</a></li>
        <li><a href="mailto:hello@adrianmato.com">Contact</a></li>
      </ul>
    </Navigation>
  </Layout>
)

export default IndexPage;
