import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { padding, Side, lineHeight, left, type } from '../styles/utils';
// import { padding, Side, lineHeight } from '../styles/Utils';

const Navigation = styled.nav`
  min-height: 8vh;
`;

const List = styled.ul`
  margin: 0 auto;
  position: relative;
  ${left(-3.5)};
  ${lineHeight(7)};
  ${type.semibold};
  font-size: var(--font-size-s);
  text-transform: uppercase;
  list-style-type: none;
  list-style-position: inside;
  display: flex;
`;

const navLinkStyles = css([
  padding(5, Side.Vertical),
  padding(3.5, Side.Horizontal),
  {
    color: 'var(--text-primary)',
    transition: 'all var(--transition-time-slow) var(--transition-regular)',
    ':hover': { color: 'var(--text-branding)' },
  },
]);

export interface IndexNavigationProps {
  social: string;
  email: string;
}

const IndexNavigation = ({ social, email }: IndexNavigationProps) => (
  <>
    <Navigation>
      <List>
        <li>
          {/* TODO: anchor to work section */}
          <a css={navLinkStyles} href="#work">
            Portfolio
          </a>
        </li>
        <li>
          <Link css={navLinkStyles} to="/blog">
            Blog
          </Link>
          {/* <Link to="/blog">Blog</Link> */}
        </li>
        <li>
          <a css={navLinkStyles} href={`https://linkedin.com/in/${social}`}>
            Resume
          </a>
        </li>
        <li>
          <a css={navLinkStyles} href={`https://github.com/${social}`}>
            GitHub
          </a>
        </li>
        <li>
          <a css={navLinkStyles} href={`https://twitter.com/${social}`}>
            Twitter
          </a>
        </li>
        <li>
          <a css={navLinkStyles} href={`mailto:${email}`}>
            Contact
          </a>
        </li>
      </List>
    </Navigation>
  </>
);

export default IndexNavigation;
