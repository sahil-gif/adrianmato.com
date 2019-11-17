/**
 * Main layout
 */

import React from 'react'
import PropTypes from 'prop-types'
import 'normalize.css'
import '../styles/variables.css'


const Layout = props => {
  return <main>{props.children}</main>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
}

export default Layout
