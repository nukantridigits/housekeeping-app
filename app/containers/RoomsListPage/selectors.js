import { createSelector } from 'reselect';
import { initialState } from './reducer';
import {isSupervisor as checkSupervisorRole} from "../../utils/roles";

/**
 * Direct selector to the roomsListPage state domain
 */

const selectRoomsListPageDomain = state => state.roomsListPage || initialState;
const selectAuthDomain = state => state.auth;

/**
 * Default selector used by RoomsListPage
 */

const makeSelectRoomsListPage = () =>
  createSelector(
    selectRoomsListPageDomain,
    substate => substate,
  );

const userCheckForSupervisor = () =>
  createSelector(
    [selectAuthDomain],
    ({ type }) => checkSupervisorRole(type),
  );

const getTasksSelector = () =>
  createSelector(
    selectRoomsListPageDomain,
    ({ tasks }) => {
      if (tasks.length) {
        const tasksById = {};
        tasks.forEach(task => (tasksById[task._id] = task));
        return { ...tasksById };
      }
      return {};
    },
  );

const getRoomsSelector = () =>
  createSelector(
    selectRoomsListPageDomain,
    ({ rooms, tasks }) =>
      rooms && tasks
        ? rooms.map(el => ({
          id: el._id,
          title: el.name,
          img: el.img,
          text: el.roomType,
          subText: tasks.length
              ? tasks.filter(task => task._id === el.taskType)[0].type
              : '',
        }))
        : {},
  );

const getIsLoading = () =>
  createSelector(
    selectRoomsListPageDomain,
    substate => substate.isLoading,
  );

export default makeSelectRoomsListPage;
export {
  selectRoomsListPageDomain,
  getRoomsSelector,
  getTasksSelector,
  getIsLoading,
  userCheckForSupervisor,
};
