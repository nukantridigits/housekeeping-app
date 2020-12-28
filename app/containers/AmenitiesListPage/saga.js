import { call, put, select, takeEvery } from 'redux-saga/effects';
import { getBooksRequest } from '../../utils/api/requests';
import { receiveAllUsers, REQUEST_ALL_USERS } from './actions';
import { getToken } from '../../modules/auth/selectors';

function* getUsersData() {
  try {
    const token = yield select(getToken);
    const users = yield call(getBooksRequest, 'users', token);
    yield put(receiveAllUsers(users.filter(user => user.type === 'worker')));
  } catch (error) {
    console.log(error.message);
    // yield put(errorAllBooks(error.message));
  }
}
export default function* amenitiesListPageSaga() {
  yield takeEvery(REQUEST_ALL_USERS, getUsersData);
  // See example in containers/HomePage/saga.js
}
