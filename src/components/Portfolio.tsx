/**
 * Portfolio of projects
 * mainly used in the homepage
 */

import React from 'react'
import styled from '@emotion/styled'

// styles
const ProjectTitle = styled.h2`
  color: var(--textTitle);
  font-weight: bolder;
`

const Portfolio = () => (
  <>
    <div className="home-work-grid__project">
      <a className="home-work-grid__anchor" id="home-work"></a>
      <div className="home-work-grid__project-description">
        <ProjectTitle>Microsoft: Azure Pipelines</ProjectTitle>
        <h3>Lead & Design Manager (2018 – Present)</h3>
        <p>
          Leading a team of 5 designers through a major redesign of a 12 years
          old enterprise product. A new product vision in the CI/CD space for
          software developers based on a single pipeline experience using YAML.
        </p>
      </div>
      <figure className="home-work-grid__project-screenshot">
        <img
          src="https://adrianmato.com/assets/work/pipelines/pipelines-01.png"
          alt="Adrián Mato - Azure Pipelines"
        />
      </figure>
    </div>
  </>
)

export default Portfolio
