export const RECEIVE_ALL_USERS = 'app/AmenitiesListPage/RECEIVE_ALL_USERS';

export function receiveAllUsers(payload) {
  return {
    type: RECEIVE_ALL_USERS,
    payload,
  };
}

export const REQUEST_ALL_USERS = 'app/AmenitiesListPage/REQUEST_ALL_USERS';
export function requestAllUsers() {
  return {
    type: REQUEST_ALL_USERS,
  };
}