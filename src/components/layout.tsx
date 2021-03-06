/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import LeftSidebar from './organisms/LeftSidebar';
import { useStaticQuery, graphql } from 'gatsby';
import { css } from "@emotion/core";

const layoutCss = css`
  display: flex;
`

const Layout: React.FC = ({ children }) => {
  return (
    <div css={layoutCss}>
      <LeftSidebar />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0
        }}
      >
        <main>{children}</main>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
