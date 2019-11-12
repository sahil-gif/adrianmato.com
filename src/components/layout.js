/**
 * Main layout with basic styles
 */

import React from "react";
import PropTypes from "prop-types";
import "normalize.css/normalize.css";

const Layout = ({ children }) => <>{children}</>;

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
