import React from 'react';
import { Global, css } from '@emotion/core';
import { Side, padding, margin } from '../styles/Utils';
import 'normalize.css';
import '../styles/themes.css';

const globalStyles = css({
  html: {
    height: '100%',
    minHeight: '100%',
    fontSize: 'var(--font-size-reset)',
    WebkitFontSmoothing: 'antialiased',
    fontKerning: 'normal',
    fontFeatureSettings: '"kern", "liga", "clig", "calt",',
  },
  'body, #___gatsby, #___gatsby > *': {
    minHeight: '100%',
    backgroundColor: 'var(--body-background)',
  },
  body: {
    ...padding(14, Side.Horizontal),
    ...margin(0, Side.Top),
    color: 'var(--text-primary)',
    font:
      'normal var(--font-size-regular) / var(--font-line-height) var(--font-family)',
    textSizeAdjust: '100%',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    FontFeatureSettings: '"kern" 1',
    fontKerning: 'normal',
    scrollBehavior: 'smooth',
  },
  'h1, h2, h3, h4, h5, h6': {
    fontWeight: 'normal',
    color: 'var(--text-title)',
    margin: '0',
    padding: '0',
  },
  'p, blockquote, pre, code, del, img, ol, ul, li, label, table': {
    padding: '0',
    margin: '0',
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
