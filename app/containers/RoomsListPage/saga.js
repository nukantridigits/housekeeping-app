import { call, put, select, takeEvery } from 'redux-saga/effects';
import { ROOMS_REQUEST } from './actionTypes';
import {
  getRoomsRequest,
  getTasksRequest,
  getStatusesRequest,
} from '../../utils/api/requests';
import {
  roomsSuccess,
  roomsFailure,
  tasksSuccess,
  statusesSuccess,
} from './actions';
import {
  getUserId,
  getUserName,
  getUserType,
  getToken,
} from '../../modules/auth/selectors';
import { TRANSPORT_ERROR_MSG } from '../../utils/api/constants';

function* getRoomsData() {
  try {
    const token = yield select(getToken);
    const userId = yield select(getUserId);
    const userName = yield select(getUserName);
    const userType = yield select(getUserType);
    const rooms = yield call(getRoomsRequest, token, {
      id: userId,
      name: userName,
      user: userType,
    });
    yield put(roomsSuccess(rooms));

    const tasks = yield call(getTasksRequest, token);
    yield put(tasksSuccess(tasks));

    const statuses = yield call(getStatusesRequest, token);
    yield put(statusesSuccess(statuses));
  } catch (error) {
    yield put(roomsFailure(TRANSPORT_ERROR_MSG + error.message));
  }
}

export default function* roomsListPageSaga() {
  yield takeEvery(ROOMS_REQUEST, getRoomsData);
}
