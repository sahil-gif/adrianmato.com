import React from 'react';
import { Global, css } from '@emotion/core';
import { Side, padding, margin } from '../styles/utils';
import '../styles/themes.css';
import '../styles/fonts/fonts.css';

const globalStyles = css({
  html: {
    height: '100%',
    minHeight: '100%',
    WebkitFontSmoothing: 'antialiased',
    fontKerning: 'normal',
    fontFeatureSettings: '"kern", "liga", "clig", "calt",',
  },
  'body, #___gatsby, #___gatsby > *': {
    minHeight: '100%',
    backgroundColor: 'var(--body-background)',
    fontSize: 'var(--font-size-base)',
  },
  body: {
    ...padding(14, Side.Horizontal),
    ...margin(0, Side.Top),
    color: 'var(--text-primary)',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    scrollBehavior: 'smooth',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  img: {
    maxWidth: '100%',
  },
  '::selection': {
    color: 'var(--text-title)',
    background: 'var(--text-selection)',
  },
  '::-moz-selection': {
    color: 'var(--text-title)',
    background: 'var(--text-selection)',
  },
  // TODO: refactor as we did we serif generator
  '.ampersand': {
    fontFamily: 'Baskerville, "EB Garamond", serif',
    fontStyle: 'italic',
    fontSize: '80%',
  },
});

export interface LayoutProps {
  children?: JSX.Element[];
  theme?: string;
}

// function SEO({ description, lang, meta, title }: SEOProps) {

const Layout = ({ children }: LayoutProps) => (
  <>
    <Global styles={globalStyles} />
    <div css={{ maxWidth: 'var(--layout-width)', margin: '0 auto' }}>
      {children}
    </div>
    {/* {theme} TODO: do we want to bring 'theme as a prop for something here? */}
  </>
);

export default Layout;
