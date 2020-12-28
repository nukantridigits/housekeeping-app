/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import { reducer as formReducer } from 'redux-form';
import authReducer from './modules/auth/reducer';
import uiReducer from './modules/ui/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  return combineReducers({
    auth: authReducer,
    ui: uiReducer,
    language: languageProviderReducer,
    router: connectRouter(history),
    form: formReducer,
    ...injectedReducers,
  });
}
