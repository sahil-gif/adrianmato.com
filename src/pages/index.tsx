// TODO: Review what dependencies are needed or not in `package.json`
import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import Navigation from '../components/IndexNavigation';
import SEO from '../components/SEO';

// styled components
const Title = styled.h1`
  color: var(--text-title);
  font-weight: bolder;
`;
const Subtitle = styled.h2`
  color: var(--text-branding);
  font-family: var(--font-serif);
`;
const Bio = styled.p``;

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
      <Title>{view.title}</Title>
      <Subtitle>
        Designing <span className="ampersand">&amp;</span> building tools for
        developers at GitHub.
      </Subtitle>
      <Bio>
        For the last 12+ years, I&apos;ve designed digital products between
        Madrid, London and now, from San Francisco. I also co-founded and later
        sold my company Erasmusu.
      </Bio>
      <Bio>
        My career started as a Software Developer but it soon became clear that
        my true passion was Design. I love combining both skillsets to create
        products that fulfill a clear purpose.
      </Bio>
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
