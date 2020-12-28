/*
 *
 * AmenitiesListPage reducer
 *
 */
import produce from 'immer';
import { RECEIVE_ALL_USERS } from './actions';

export const initialState = {
  users: [],
};

/* eslint-disable default-case, no-param-reassign */
const amenitiesListPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case RECEIVE_ALL_USERS:
        draft.users = action.payload;
        break;
    }
  });

export default amenitiesListPageReducer;
