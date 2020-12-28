import { call, put, select, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { ROOM_REQUEST, ROOM_UPDATE_REQUEST } from './actionTypes';
import {
  roomSuccess,
  roomFailure,
  roomUpdateSuccess,
  roomAmenitiesSuccess,
} from './actions';
import { TRANSPORT_ERROR_MSG } from '../../utils/api/constants';
import {
  getAmenitiesListRequest,
  getRoomRequest,
  updateBookDataByIdRequest,
} from '../../utils/api/requests';
import { getToken } from '../../modules/auth/selectors';
import {
  getRoomId,
  createRequestRoomDataByForm,
  getRoomAmenitiesDefault,
  userCheckForSupervisor,
} from './selectors';
import { isHavingProps } from '../../utils/objects';
import { setDefaultToDoList } from './helper';

function* getRoomData({ payload }) {
  try {
    const token = yield select(getToken);
    const isSuperuser = yield select(userCheckForSupervisor());
    const amenitiesList = yield call(getAmenitiesListRequest, token);
    yield put(roomAmenitiesSuccess(amenitiesList));
    const room = yield call(getRoomRequest, token, payload);

    const { todos, amenities } = room;
    const roomDefault = JSON.parse(JSON.stringify(room));
    if ((isSuperuser && !amenities) || !isSuperuser) {
      roomDefault.amenities = yield select(getRoomAmenitiesDefault());
    }
    if (isHavingProps(todos)) {
      roomDefault.todos = setDefaultToDoList(todos);
    }
    yield put(roomSuccess(roomDefault));
  } catch (error) {
    yield put(roomFailure(TRANSPORT_ERROR_MSG + error.message));
  }
}

function* updateRoomData({ payload }) {
  const { route, roomUpdateOnSuccess } = payload;
  try {
    const token = yield select(getToken);
    const roomId = yield select(getRoomId());
    const room = yield select(createRequestRoomDataByForm());

    const response = yield call(
      updateBookDataByIdRequest,
      'rooms',
      roomId,
      token,
      room,
    );

    if (roomUpdateOnSuccess) {
      const roomUpdated = yield call(getRoomRequest, token, roomId);
      yield put(roomSuccess(roomUpdated));
    }

    if (route) {
      yield put(push(route));
    }

    yield put(roomUpdateSuccess());
  } catch (error) {
    yield put(roomFailure(TRANSPORT_ERROR_MSG + error.message));
  }
}

export default function* roomsListPageSaga() {
  yield takeEvery(ROOM_REQUEST, getRoomData);
  yield takeEvery(ROOM_UPDATE_REQUEST, updateRoomData);
}
