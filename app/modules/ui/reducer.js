import * as actions from './actionTypes';
import { LIGHT_THEME } from '../../components/header/header-menu/constants';

const initialState = {
  theme: LIGHT_THEME,
};

const uiReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.THEME_CHANGE:
      return {
        ...state,
        theme: payload,
      };
    default:
      return state;
  }
};

export default uiReducer;
