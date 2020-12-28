import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import PrivateRoute from './PrivateRoute';
import { pageList } from './pageList';
import { getIsAuthorized } from '../../modules/auth/selectors';
import LoginPage from '../LoginPage/Loadable';

const loginPath = pageList.login.path;

const Router = ({ isAuthorized }) => {
  if (!isAuthorized) {
    return (
      <Switch>
        <Route path={loginPath} component={LoginPage} />
        <Redirect to={loginPath} />
      </Switch>
    );
  }
  return (
    <Switch>
      <Redirect from="/" to="/rooms" exact />
      {Object.keys(pageList).map(key => (
        <PrivateRoute
          key={key}
          isAuthorized={isAuthorized}
          path={`${pageList[key].path}`}
          exact={pageList[key].exact}
          component={pageList[key].component}
          redirectPath={loginPath}
        />
      ))}
    </Switch>
  );
};

Router.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state),
});

export default connect(mapStateToProps)(Router);
