/*
 *
 * RoomPage actions
 *
 */

import * as actions from './actionTypes';

export const roomRequest = data => ({
  type: actions.ROOM_REQUEST,
  payload: data,
});

export const roomSuccess = room => ({
  type: actions.ROOM_SUCCESS,
  payload: room,
});

export const roomFailure = errorMessage => ({
  type: actions.ROOM_FAILURE,
  payload: errorMessage,
});

export const roomSet = room => ({
  type: actions.ROOM_SET,
  payload: room,
});

export const roomUpdateRequest = payload => ({
  type: actions.ROOM_UPDATE_REQUEST,
  payload,
});

export const roomUpdateSuccess = () => ({
  type: actions.ROOM_UPDATE_SUCCESS,
});

export const roomAmenitiesSuccess = amenities => ({
  type: actions.ROOM_AMENITIES_LIST_SUCCESS,
  payload: amenities,
});

export const increaseAmenity = payload => ({
  type: actions.ROOM_INCREASE_AMENITY,
  payload,
});

export const decreaseAmenity = payload => ({
  type: actions.ROOM_DECREASE_AMENITY,
  payload,
});

export const updateToDoList = payload => ({
  type: actions.ROOM_UPDATE_TODO_LIST,
  payload,
});
