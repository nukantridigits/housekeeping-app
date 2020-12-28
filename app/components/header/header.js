/*
 *
 * Header component
 *
 */

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft } from 'tabler-icons-react';
import Logo from '../../assets/img/Logo-small.svg';
import HeaderMenu from './header-menu';
import './styles.less';

export function Header({ title, onBackClick }) {
  Header.propTypes = {
    title: PropTypes.string,
    onBackClick: PropTypes.func,
  };
  const backButton = useMemo(
    () =>
      onBackClick ? (
        <ChevronLeft size="35" onClick={onBackClick} />
      ) : (
        <img src={Logo} alt="logo" />
      ),
    onBackClick,
  );

  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-logo">{backButton}</div>
        <div className="header-title">{title}</div>
        <HeaderMenu />
      </div>
    </header>
  );
}
