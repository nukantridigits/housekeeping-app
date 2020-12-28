/*
 *
 * RoomsListPage reducer
 *
 */
import produce from 'immer';
import * as actions from './actionTypes';

export const initialState = {
  rooms: [],
  tasks: [],
  statuses: [],
  isLoading: true,
  errors: null,
};

const roomsListPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    const { type, payload } = action;
    switch (type) {
      case actions.ROOMS_REQUEST:
        draft.errors = null;
        break;
      case actions.TASKS_REQUEST:
        draft.errors = null;
        break;
      case actions.STATUSES_REQUEST:
        draft.errors = null;
        break;
      case actions.ROOMS_SUCCESS:
        draft.rooms = payload;
        draft.isLoading = false;
        draft.errors = null;
        break;
      case actions.TASKS_SUCCESS:
        draft.tasks = payload;
        draft.errors = null;
        draft.isLoading = false;
        break;
      case actions.STATUSES_SUCCESS:
        draft.statuses = payload;
        draft.errors = null;
        draft.isLoading = false;
        break;
      case actions.ROOMS_FAILURE:
        draft.errors = payload;
        draft.isLoading = false;
        break;
      default:
        return state;
    }
  });

export default roomsListPageReducer;
