import * as actions from './actionTypes';

export const authRequest = data => ({
  type: actions.AUTH_REQUEST,
  payload: data,
});

export const authSuccess = authData => ({
  type: actions.AUTH_SUCCESS,
  payload: authData,
});

export const authFailure = errorMessage => ({
  type: actions.AUTH_FAILURE,
  payload: errorMessage,
});

export const authLogout = () => ({
  type: actions.AUTH_LOGOUT,
});
