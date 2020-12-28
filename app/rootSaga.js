import { takeLatest } from 'redux-saga/effects';
import { AUTH_REQUEST } from './modules/auth/actionTypes';
import handleAuthorization from './modules/auth/saga';

export function* rootSaga() {
  yield takeLatest(AUTH_REQUEST, handleAuthorization);
}
