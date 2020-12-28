import { push } from 'react-router-redux';
import { call, put } from 'redux-saga/effects';
import { authSuccess, authFailure } from './actions';
import { TRANSPORT_ERROR_MSG } from '../../utils/api/constants';
import { authRequest } from '../../utils/api/requests';
import { pageList } from '../../containers/Router/pageList';

export default function* handleAuthorization({ payload }) {
  try {
    const { id, token, message, user, type, name } = yield call(
      authRequest,
      payload,
    );

    if (token) {
      yield put(authSuccess({ id, token, type, name }));
      yield put(push(pageList.rooms.path));
    } else if (user === false) {
      yield put(authFailure(message));
    }
  } catch (error) {
    yield put(authFailure(TRANSPORT_ERROR_MSG + error.message));
  }
}
