import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTheme } from '../../modules/ui/selectors';

const ThemeProvider = ({ children, theme }) => (
  <div className={`theme-wrapper ${theme}`}>{children}</div>
);

ThemeProvider.propTypes = {
  children: PropTypes.array,
  theme: PropTypes.string,
};

const mapStateToProps = state => ({
  theme: getTheme(state),
});

export default connect(mapStateToProps)(ThemeProvider);
