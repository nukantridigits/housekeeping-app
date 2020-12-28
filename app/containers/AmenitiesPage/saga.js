import { takeEvery, call, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { getToken, getUserName } from '../../modules/auth/selectors';
import {
  getAmenitiesReportRequest,
  setAmenitiesRequest,
  updateBookDataByIdRequest,
} from '../../utils/api/requests';
import {
  ADD_AMENITIES_REQUEST,
  clearAmenities,
  GET_AMENITES_REPORT_REQUEST,
  setAmenitiesReport,
} from './actions';
import {
  getAmenitiesActionType,
  getAmenitiesForRequest,
  getAmenitiesUserType,
  getUpdatingUserId,
  getUserNameSelector,
} from './selectors';

// Individual exports for testing
function* setAmenitiesData() {
  try {
    const token = yield select(getToken);
    const action = yield select(getAmenitiesActionType());
    const amenities = yield select(getAmenitiesForRequest());
    const userName = yield select(getUserNameSelector());
    const supervisorName = yield select(getUserName);
    const amenitiesUserAction = yield select(getAmenitiesUserType());
    const userId = yield select(getUpdatingUserId());

    const response = yield call(setAmenitiesRequest, token, {
      action,
      amenities,
      userName,
      userType: supervisorName,
    });
    const data = yield call(updateBookDataByIdRequest, 'users', userId, token, {
      amenities: amenitiesUserAction,
    });
    yield put(push('/amenities'));
    yield put(clearAmenities());
    // yield put(receiveAllUsers(users.filter(user => user.type === 'worker')));
  } catch (error) {
    console.log(error.message);
    // yield put(errorAllBooks(error.message));
  }
}

function* getAmenitiesReportData() {
  try {
    const token = yield select(getToken);
    const userName = yield select(getUserNameSelector());
    const response = yield call(getAmenitiesReportRequest, token, userName);

    yield put(setAmenitiesReport(response));
  } catch (error) {
    console.log(error.message);
    // yield put(errorAllBooks(error.message));
  }
}

export default function* amenitiesPageSaga() {
  yield takeEvery(ADD_AMENITIES_REQUEST, setAmenitiesData);
  yield takeEvery(GET_AMENITES_REPORT_REQUEST, getAmenitiesReportData);
}
