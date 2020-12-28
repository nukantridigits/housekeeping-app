import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({
  component: Component,
  isAuthorized,
  redirectPath,
  exact = true,
  ...rest
}) => (
  <Route
    {...rest}
    exact={exact}
    render={props =>
      isAuthorized ? <Component {...props} /> : <Redirect to={redirectPath} />
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  redirectPath: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

export default PrivateRoute;
