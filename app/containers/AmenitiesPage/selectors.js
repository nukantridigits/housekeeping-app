/* eslint-disable no-underscore-dangle */
import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the amenitiesPage state domain
 */

const selectAmenitiesPageDomain = state => state.amenitiesPage || initialState;
const selectAmenitiesListPageDomain = state => state.amenitiesListPage;
const selectRouterDomain = state => state.router;
/**
 * Other specific selectors
 */

/**
 * Default selector used by AmenitiesPage
 */

const makeSelectAmenitiesPage = () =>
  createSelector(
    selectAmenitiesPageDomain,
    substate => substate,
  );

const getAmenitiesForRequest = () =>
  createSelector(
    selectAmenitiesPageDomain,
    substate =>
      Object.keys(substate.amenities).reduce(
        (prev, cur) => ({
          ...prev,
          [substate.amenities[cur].name]: substate.amenities[cur].quantity,
        }),
        {},
      ),
  );

const getAmenitiesSelector = () =>
  createSelector(
    selectAmenitiesPageDomain,
    substate =>
      Object.keys(substate.amenities).map(key => substate.amenities[key]),
  );

const getUpdatingUserId = () =>
  createSelector(
    [selectRouterDomain],
    ({ location }) => location.pathname.split('/')[2],
  );

const getUserNameSelector = () =>
  createSelector(
    [selectRouterDomain, selectAmenitiesListPageDomain],
    ({ location }, { users }) =>
      users.find(el => el._id === location.pathname.split('/')[2])
        ? users.find(el => el._id === location.pathname.split('/')[2]).name
        : '',
  );

const getUserAmenitiesModeSelector = () =>
  createSelector(
    [selectRouterDomain, selectAmenitiesListPageDomain],
    ({ location }, { users }) =>
      users.find(el => el._id === location.pathname.split('/')[2])
        ? users.find(el => el._id === location.pathname.split('/')[2]).amenities
        : '',
  );

const isAmenitiesSetModeSelector = () =>
  createSelector(
    getUserAmenitiesModeSelector(),
    amenitiesType => amenitiesType === 'none',
  );

const isAmenitiesLeftModeSelector = () =>
  createSelector(
    getUserAmenitiesModeSelector(),
    amenitiesType => amenitiesType === 'assigned',
  );

const isAmenitiesReportModeSelector = () =>
  createSelector(
    getUserAmenitiesModeSelector(),
    amenitiesType => amenitiesType === 'stock',
  );

const getAmenitiesPageTitle = () =>
  createSelector(
    [
      isAmenitiesSetModeSelector(),
      isAmenitiesLeftModeSelector(),
      isAmenitiesReportModeSelector(),
    ],
    (isAmenitiesSet, isAmenitiesLeft, isAmenitiesReport) => {
      if (isAmenitiesSet) {
        return 'Set amenities';
      }
      if (isAmenitiesLeft) {
        return 'Set amenities left';
      }
      if (isAmenitiesReport) {
        return 'Amenitites left';
      }
      return 'Amenitites left';
    },
  );

const getAmenitiesActionType = () =>
  createSelector(
    [
      isAmenitiesSetModeSelector(),
      isAmenitiesLeftModeSelector(),
      isAmenitiesReportModeSelector(),
    ],
    (isAmenitiesSet, isAmenitiesLeft) => {
      if (isAmenitiesSet) {
        return 'give';
      }
      if (isAmenitiesLeft) {
        return 'stock';
      }
      return '';
    },
  );

const getAmenitiesUserType = () =>
  createSelector(
    [
      isAmenitiesSetModeSelector(),
      isAmenitiesLeftModeSelector(),
      isAmenitiesReportModeSelector(),
    ],
    (isAmenitiesSet, isAmenitiesLeft) => {
      if (isAmenitiesSet) {
        return 'assigned';
      }
      if (isAmenitiesLeft) {
        return 'stock';
      }
      return '';
    },
  );

const getAmenitiesPageButtonText = () =>
  createSelector(
    [
      isAmenitiesSetModeSelector(),
      isAmenitiesLeftModeSelector(),
      isAmenitiesReportModeSelector(),
    ],
    (isAmenitiesSet, isAmenitiesLeft, isAmenitiesReport) => {
      if (isAmenitiesSet) {
        return 'Add amenities';
      }
      if (isAmenitiesLeft) {
        return 'Confirm changes';
      }
      if (isAmenitiesReport) {
        return '';
      }
    },
  );

const getAmenitiesReport = () =>
  createSelector(
    selectAmenitiesPageDomain,
    ({ amenitiesReport }) => {
      if (amenitiesReport.total) {
        const total = Object.keys(amenitiesReport.total).map(key => ({
          name: key,
          quantity: amenitiesReport.total[key],
          _id: key,
        }));
        return { ...amenitiesReport, total };
      }
      return {};
    },
  );

export default makeSelectAmenitiesPage;
export {
  selectAmenitiesPageDomain,
  getAmenitiesSelector,
  getUserNameSelector,
  isAmenitiesSetModeSelector,
  isAmenitiesReportModeSelector,
  isAmenitiesLeftModeSelector,
  getAmenitiesPageTitle,
  getAmenitiesPageButtonText,
  getAmenitiesActionType,
  getAmenitiesForRequest,
  getAmenitiesUserType,
  getUpdatingUserId,
  getAmenitiesReport,
};
