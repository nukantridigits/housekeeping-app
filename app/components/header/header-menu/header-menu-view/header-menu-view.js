/*
 *
 * Header-Menu-View component
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Menu, X } from 'tabler-icons-react';
import HeaderMenuItemsView from '../header-menu-items-view';
import './styles.less';

export default function HeaderMenuView({
  isMenuShow,
  showMenu,
  handleLogoutClick,
  theme,
  handleSetTheme,
}) {
  HeaderMenuView.propTypes = {
    isMenuShow: PropTypes.bool,
    showMenu: PropTypes.func,
    handleLogoutClick: PropTypes.func,
    theme: PropTypes.string,
    handleSetTheme: PropTypes.func,
  };

  return (
    <div className="header-menu">
      {isMenuShow ? (
        <>
          <X
            size="24"
            onClick={showMenu}
            className="header-menu__trigger-icon"
          />
          <HeaderMenuItemsView
            theme={theme}
            handleSetTheme={handleSetTheme}
            handleLogoutClick={handleLogoutClick}
          />
        </>
      ) : (
        <Menu
          size="24"
          onClick={showMenu}
          className="header-menu__trigger-icon"
        />
      )}
    </div>
  );
}
