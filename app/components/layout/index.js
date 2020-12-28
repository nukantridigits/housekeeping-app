/*
 *
 * Layout component
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const Layout = ({ header, footer, content, footerHeight }) => (
  <div className="layout">
    {header && <div className="layout__header">{header}</div>}
    <div className="layout__content">{content}</div>
    {footer && (
      <div
        className="layout__footer"
        style={{ top: `calc(100% - ${footerHeight})` }}
      >
        {footer}
      </div>
    )}
  </div>
);

Layout.propTypes = {
  header: PropTypes.object,
  footer: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  content: PropTypes.object,
  footerHeight: PropTypes.string,
};

export default Layout;
