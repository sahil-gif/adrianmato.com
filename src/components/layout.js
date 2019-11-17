/**
 * Main layout
 */

import React from 'react'
import { Global, css } from '@emotion/core'
import 'normalize.css'
import '../styles/variables.css'

const globalStyles = css({
  '*': {
    boxSizing: 'border-box',
  },
  html: {
    fontSize: 'var(--font-size-reset)',
    color: 'var(--textPrimary)',
    backgroundColor: 'var(--background)',
  },
  body: {
    padding: 'var(--spacer-56)',
    font: 'var(--font-weight) var(--font-size) / var(--font-line-height) var(--font-family);',
    WebkitTextSizeAdjust: '100%',
    '-webkit-font-smoothing': 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    FontFeatureSettings: '"kern" 1',
    fontKerning: 'normal',
    scrollBehavior: 'smooth',
  },
  'h1, h2, h3, h4, h5, h6': {
    fontWeight: 'var(--font-weight)',
    color: 'var(--textTitle)',
    margin: '0 0 1.2em',
  },
  img: {
    maxWidth: '100%',
  },
  '::selection': {
    color: 'var(--textTitle)',
    background: 'var(--textSelection)',
  },
  '::-moz-selection': {
    color: 'var(--textTitle)',
    background: 'var(--textSelection)',
  },
  '.ampersand': {
    fontFamily: 'Baskerville, "EB Garamond", serif',
    fontStyle: 'italic',
    fontSize: '80%',
  },
})

const Layout = ({ children }) => (
  <>
    <Global styles={globalStyles} />
    <div>{children}</div>
  </>
)

export default Layout
