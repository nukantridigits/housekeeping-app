/*
 *
 * Header-Menu component
 *
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authLogout } from '../../../modules/auth/actions';
import { getTheme } from '../../../modules/ui/selectors';
import { themeChange } from '../../../modules/ui/actions';
import HeaderMenuView from './header-menu-view';
import './styles.less';
import { DARK_THEME, LIGHT_THEME } from './constants';

function HeaderMenu({ logout, theme, themeChange }) {
  HeaderMenu.propTypes = {
    logout: PropTypes.func,
  };

  const [isMenuShow, setIsMenuShow] = useState(false);
  const showMenu = () => {
    setIsMenuShow(!isMenuShow);
  };

  const handleSetTheme = () => {
    themeChange(theme === DARK_THEME ? LIGHT_THEME : DARK_THEME);
  };

  const handleLogoutClick = () => {
    logout();
  };

  return (
    <HeaderMenuView
      theme={theme}
      isMenuShow={isMenuShow}
      showMenu={showMenu}
      handleLogoutClick={handleLogoutClick}
      handleSetTheme={handleSetTheme}
    />
  );
}

HeaderMenu.propTypes = {
  theme: PropTypes.string,
  logout: PropTypes.func,
  themeChange: PropTypes.func,
};

const mapStateToProps = state => ({
  theme: getTheme(state),
});

const mapDispatchToProps = {
  logout: authLogout,
  themeChange,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderMenu);
