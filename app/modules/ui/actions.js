import * as actions from './actionTypes';

export const themeChange = data => ({
  type: actions.THEME_CHANGE,
  payload: data,
});
