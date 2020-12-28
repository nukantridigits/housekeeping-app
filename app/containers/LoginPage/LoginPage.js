/*
 * LoginPage
 */
import React from 'react';
import Logo from './Logo';
import LoginForm from './LoginForm';
import './styles.less';

export default function LoginPage() {
  return (
    <div className="login_page">
      <Logo />
      <LoginForm />
    </div>
  );
}
