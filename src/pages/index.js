import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"



const IndexPage = () => (
  <Layout>
    <SEO />
    <h1>Adrián Mato</h1>
    <h2>Designing <span class="ampersand">&amp;</span> building tools for developers at GitHub.</h2>
    <p>
      For the last 12+ years, I've designed digital products between Madrid, London and now, from
      San Francisco. I also co-founded and later sold my company Erasmusu.
    </p>
    <p>
      My career started as a Software Developer but it soon became clear that my true passion was Design.
      I love combining both skillsets to create products that fulfill a clear purpose.
    </p>
  </Layout>
)

export default IndexPage
