// TODO: Review what dependencies are needed or not in `package.json`
import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import Navigation from '../components/IndexNavigation';
import SEO from '../components/SEO';
import { lineHeight, margin, Side, type } from '../styles/utils';

// TODO: I'm not sure if it's worth using styled for such simple parts… it's more clear but also more verbose
// TODO: Arrow pointing down
// TODO: Convert to `em` all the text margins
// TODO: Add manifest https://www.gatsbyjs.org/tutorial/part-eight/#add-a-manifest-file

const BioContainer = styled.div`
  min-height: 89vh;
  display: flex;
  align-items: center;
`;
const Bio = styled.div`
  max-width: 66rem;
  bottom: 1.5vh;
  position: relative;
  ${lineHeight(6)};
`;
const Title = styled.h1`
  color: var(--text-title);
  font-size: 3.8rem;
  ${lineHeight(12)};
  margin-bottom: 0.6rem;
`;
const Subtitle = styled.h2`
  margin-bottom: 2.2rem;
  color: var(--text-branding);
  font-size: var(--font-size-m);
  font-weight: normal;
  ${type.serif};
  ${lineHeight(8)};
`;
const Description = styled.p`
  ${margin(4.5, Side.Bottom)}
  ${lineHeight(7)};
`;

export interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        titleDefault?: string;
        description: string;
        email: string;
        social: string;
      };
    };
  };
}

const IndexPage = ({ data }: IndexPageProps) => {
  const view = data.site.siteMetadata;
  return (
    <Layout theme="">
      <SEO
        title={view.titleDefault ? view.titleDefault : view.title}
        description={view.description}
      />

      <BioContainer>
        <Bio>
          <Title>{view.title}</Title>
          {/* TODO: Fix rendering differences against adrianmato.com */}
          {/* <link href='https://fonts.googleapis.com/css?family=EB+Garamond' rel='stylesheet' type='text/css'></link> */}
          <Subtitle>
            Designing <span className="ampersand">&amp;</span> building tools
            for developers at GitHub.
          </Subtitle>
          <Description>
            For the last 12+ years, I&apos;ve designed digital products between
            Madrid, London and now, from San Francisco. I also co-founded and
            later sold my company Erasmusu.
          </Description>
          <Description>
            My career started as a Software Developer but it soon became clear
            that my true passion was Design. I love combining both skillsets to
            create products that fulfill a clear purpose.
          </Description>
        </Bio>
      </BioContainer>
      <Navigation social={view.social} email={view.email} />

      <div id="work"></div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        titleDefault
        description
        email
        social
      }
    }
  }
`;
