/*
 *
 * AmenitiesPage reducer
 *
 */
import produce from 'immer';
import {
  CLEAR_AMENITIES,
  DECREASE_AMENITY,
  INCREASE_AMENITY,
  MASS_INCREASE_AMENITY,
  SET_AMENITIES_REPORT,
} from './actions';

export const initialState = {
  amenities: {
    '5da2b8441c9d440000431df5': {
      quantity: 0,
      quantityPerBox: 50,
      quantityPerRoom: 2,
      _id: '5da2b8441c9d440000431df5',
      name: 'Conditioner 50ml',
    },
    '5da2bf85ea67cf3149f67cb5': {
      quantity: 0,
      quantityPerBox: 100,
      quantityPerRoom: 2,
      _id: '5da2bf85ea67cf3149f67cb5',
      name: 'Cotton buds',
      __v: 0,
    },
    '5da2bfa0ea67cf3149f67cb7': {
      quantity: 0,
      quantityPerBox: 50,
      quantityPerRoom: 2,
      _id: '5da2bfa0ea67cf3149f67cb7',
      name: 'Shower Gel',
      __v: 0,
    },
    '5db055257e42c01cb70fc8ed': {
      quantity: 0,
      quantityPerBox: 10,
      quantityPerRoom: 2,
      _id: '5db055257e42c01cb70fc8ed',
      name: 'Bath Robe',
      __v: 0,
    },
    '5de1f187822eb66954898b2c': {
      quantity: 0,
      quantityPerBox: 20,
      quantityPerRoom: 4,
      _id: '5de1f187822eb66954898b2c',
      name: 'Beer',
      __v: 0,
    },
    '5de1f234822eb66954898b2d': {
      quantity: 0,
      quantityPerBox: 10,
      quantityPerRoom: 2,
      _id: '5de1f234822eb66954898b2d',
      name: 'Wine',
      __v: 0,
    },
    '5e2882b32d26c52725e8558d': {
      quantity: 0,
      quantityPerBox: 10,
      quantityPerRoom: 2,
      _id: '5e2882b32d26c52725e8558d',
      name: 'Perrier 0.5',
      __v: 0,
    },
    '5e2882bf2d26c52725e8558e': {
      quantity: 0,
      quantityPerBox: 20,
      quantityPerRoom: 2,
      _id: '5e2882bf2d26c52725e8558e',
      name: 'Still Water 0.5',
      __v: 0,
    },
  },
  amenitiesReport: [],
};

/* eslint-disable default-case, no-param-reassign */
const amenitiesPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case INCREASE_AMENITY:
        draft.amenities[action.payload.id].quantity =
          state.amenities[action.payload.id].quantity + action.payload.quantity;
        break;
      case DECREASE_AMENITY:
        draft.amenities[action.payload.id].quantity =
          state.amenities[action.payload.id].quantity - action.payload.quantity;
        break;
      case MASS_INCREASE_AMENITY:
        Object.keys(state.amenities).forEach(key => {
          draft.amenities[key].quantity =
            state.amenities[key].quantity + action.payload;
        });
        break;
      case CLEAR_AMENITIES:
        Object.keys(state.amenities).forEach(key => {
          draft.amenities[key].quantity = 0;
        });
        break;
      case SET_AMENITIES_REPORT:
        draft.amenitiesReport = action.payload;
        break;
    }
  });

export default amenitiesPageReducer;
