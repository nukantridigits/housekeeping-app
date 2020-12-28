/* eslint-disable no-underscore-dangle */
import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the amenitiesListPage state domain
 */

const selectAmenitiesListPageDomain = state =>
  state.amenitiesListPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AmenitiesListPage
 */

const makeSelectAmenitiesListPage = () =>
  createSelector(
    selectAmenitiesListPageDomain,
    substate => substate,
  );

const getUsersSelector = () =>
  createSelector(
    selectAmenitiesListPageDomain,
    substate =>
      substate.users.map(el => ({
        text: el.name,
        subText: el.amenities,
        img: '',
        id: el._id,
      })),
  );

export default makeSelectAmenitiesListPage;
export { selectAmenitiesListPageDomain, getUsersSelector };
