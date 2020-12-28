/*
 *
 * RoomPage reducer
 *
 */
import produce from 'immer';
import * as actions from './actionTypes';

export const initialState = {
  room: [],
  amenitiesList: [],
  isLoading: true,
  errors: null,
};

const roomPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    const { type, payload } = action;
    switch (type) {
      case actions.ROOM_REQUEST:
        draft.isLoading = true;
        draft.errors = null;
        break;
      case actions.ROOM_SUCCESS:
        draft.room = payload;
        draft.isLoading = false;
        draft.errors = null;
        break;
      case actions.ROOM_FAILURE:
        draft.isLoading = false;
        draft.errors = payload;
        break;
      case actions.ROOM_SET:
        draft.room = payload;
        break;
      case actions.ROOM_UPDATE_REQUEST:
        draft.errors = null;
        break;
      case actions.ROOM_UPDATE_SUCCESS:
        draft.errors = null;
        break;
      case actions.ROOM_AMENITIES_LIST_REQUEST:
        draft.errors = null;
        break;
      case actions.ROOM_AMENITIES_LIST_SUCCESS:
        draft.amenitiesList = payload;
        draft.errors = null;
        break;
      case actions.ROOM_AMENITIES_SET_DEFAULT:
        draft.amenities = payload;
        break;
      case actions.ROOM_INCREASE_AMENITY:
        draft.room.amenities[payload.name] =
          state.room.amenities[payload.name] + payload.quantity;
        break;
      case actions.ROOM_DECREASE_AMENITY:
        draft.room.amenities[payload.name] =
          state.room.amenities[payload.name] - payload.quantity;
        break;
      case actions.ROOM_UPDATE_TODO_LIST:
        draft.room.todos[payload.name] = payload.value;
        break;
      default:
        return state;
    }
  });

export default roomPageReducer;
