/*
 *
 * Header-Menu-Items-View component
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Menu as SemanticMenu } from 'semantic-ui-react';
import { Logout, Moon, Sun } from 'tabler-icons-react';
import {
  DARK_MODE_TEXT,
  DARK_THEME,
  LIGHT_MODE_TEXT,
  LIGHT_THEME,
} from '../constants';
import './styles.less';

export default function HeaderMenuItemsView({
  theme,
  handleSetTheme,
  handleLogoutClick,
}) {
  HeaderMenuItemsView.propTypes = {
    theme: PropTypes.string,
    handleSetTheme: PropTypes.func,
    handleLogoutClick: PropTypes.func,
  };

  return (
    <SemanticMenu vertical>
      <SemanticMenu.Item onClick={handleSetTheme}>
        {theme === LIGHT_THEME ? (
          <Moon size="16" className="header-menu__item-icon" />
        ) : (
          <Sun size="16" className="header-menu__item-icon" />
        )}
        {theme === DARK_THEME ? LIGHT_MODE_TEXT : DARK_MODE_TEXT}
      </SemanticMenu.Item>
      <SemanticMenu.Item onClick={handleLogoutClick}>
        <Logout size="18" className="header-menu__item-icon" />
        Log Out
      </SemanticMenu.Item>
    </SemanticMenu>
  );
}
