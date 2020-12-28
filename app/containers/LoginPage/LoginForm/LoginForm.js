/*
 * LoginForm
 */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { authRequest } from '../../../modules/auth/actions';
import { getIsLoading, getToken } from '../../../modules/auth/selectors';
import { validate } from './utils';
import { FormInputField } from '../../../my-custom-semantic-theme/components/form-input-field';
const FORM_NAME = 'loginForm';
// eslint-disable-next-line no-shadow
const LoginForm = ({ authRequest, handleSubmit, isLoading, submitting }) => {
  const onSubmit = values => {
    const { phone, password } = values;
    if (phone && password) {
      authRequest({ phone, password });
    }
  };

  return (
    <div className="login_form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          placeholder="Login"
          name="phone"
          type="text"
          component={FormInputField}
        />
        <Field
          placeholder="Password"
          name="password"
          type="password"
          component={FormInputField}
        />
        <Button primary size="large" type="submit" disabled={submitting}>
          Log In
        </Button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  authRequest: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

const LoginReduxForm = reduxForm({
  form: FORM_NAME,
  validate,
})(LoginForm);

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
  token: getToken(state),
});

const mapDispatchToProps = { authRequest };

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(LoginReduxForm);
