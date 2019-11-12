/**
 * Main layout
 */

import React from 'react'
import PropTypes from 'prop-types'
import theme from '../theme/theme.js'
import { ThemeProvider } from 'emotion-theming'

const Layout = props => {
  return (
    <ThemeProvider theme={theme}>
      <main>{props.children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
}

export default Layout
