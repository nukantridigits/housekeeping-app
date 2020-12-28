/*
 * Logo
 *
 */
import React from 'react';
import LogoPath from '../../../assets/img/Logo.svg';
import './styles.less';

export default function Logo() {
  return (
    <div className="logo">
      <img className="logo-icon" src={LogoPath} alt="Housekeeping Logo" />
      <div className="logo-tag-line">Housekeeping</div>
    </div>
  );
}
