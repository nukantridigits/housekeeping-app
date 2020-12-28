/*
 *
 * RoomsListPage actions
 *
 */

import * as actions from './actionTypes';

export const roomsRequest = () => ({
  type: actions.ROOMS_REQUEST,
});

export const roomsSuccess = rooms => ({
  type: actions.ROOMS_SUCCESS,
  payload: rooms,
});

export const roomsFailure = errorMessage => ({
  type: actions.ROOMS_FAILURE,
  payload: errorMessage,
});

export const tasksSuccess = tasks => ({
  type: actions.TASKS_SUCCESS,
  payload: tasks,
});

export const statusesSuccess = tasks => ({
  type: actions.STATUSES_SUCCESS,
  payload: tasks,
});
