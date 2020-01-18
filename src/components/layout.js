import React from 'react';
import { Global, css } from '@emotion/core';
import { Side, padding, margin } from '../styles/utils';
import 'normalize.css';
import '../styles/themes.css';

const globalStyles = css({
  html: {
    height: '100%',
    minHeight: '100%',
    fontSize: 'var(--font-size-reset)',
    WebkitFontSmoothing: 'antialiased',
  },
  'body, #___gatsby, #___gatsby > *': {
    minHeight: '100%',
    backgroundColor: 'var(--body-background)',
  },
  body: {
    ...padding(14),
    ...margin(0, Side.Top),
    color: 'var(--text-primary)',
    font: 'var(--font-weight) var(--font-size) / var(--font-line-height) var(--font-family)',
    WebkitTextSizeAdjust: '100%',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    FontFeatureSettings: '"kern" 1',
    fontKerning: 'normal',
    scrollBehavior: 'smooth',
  },
  'h1, h2, h3, h4, h5, h6': {
    fontWeight: 'var(--font-weight)',
    color: 'var(--text-title)',
    margin: '0',
    padding: '0',
  },
  'p, blockquote, pre, code, del, img, ol, ul, li, label, table' : {
    padding: 0,
    margin: 0,
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

const Layout = ({ children }) => (
  <div class="dark">
    <Global styles={globalStyles} />
    {children}
  </div>
)

export default Layout