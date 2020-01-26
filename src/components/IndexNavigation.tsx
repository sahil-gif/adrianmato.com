import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Navigation = styled.nav`
  // background-color: red;
`;

export interface IndexNavigationProps {
  social: string;
  email: string;
}

const IndexNavigation = ({ social, email }: IndexNavigationProps) => (
  <Navigation>
    <ul>
      <li>
        {/* TODO: anchor to work section */}
        <a href="#work">Portfolio</a>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <a href={`https://linkedin.com/in/${social}`}>Resume</a>
      </li>
      <li>
        <a href={`https://github.com/${social}`}>GitHub</a>
      </li>
      <li>
        <a href={`https://twitter.com/${social}`}>Twitter</a>
      </li>
      <li>
        <a href={`mailto:${email}`}>Contact</a>
      </li>
    </ul>
  </Navigation>
);

export default IndexNavigation;
