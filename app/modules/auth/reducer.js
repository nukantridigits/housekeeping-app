import * as actions from './actionTypes';

export const initialState = {
  isLoading: false,
  isAuthorized: false,
  errors: null,
  id: null,
  token: null,
  type: null,
  name: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
        errors: null,
        token: null,
      };
    case actions.AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthorized: true,
        errors: null,
        token: payload.token,
        type: payload.type,
        name: payload.name,
        id: payload.id,
      };
    case actions.AUTH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthorized: false,
        errors: payload,
        token: null,
      };
    case actions.AUTH_LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
