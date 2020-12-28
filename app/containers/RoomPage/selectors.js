import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { getCurrentTimeMs, getRoomFormattedDate } from '../../utils/dates';
import { isSupervisor as checkSupervisorRole } from '../../utils/roles';
import { isHavingProps } from '../../utils/objects';
import {
  ACTION_CHECKED,
  ACTION_CLEANED,
  ACTION_START_CHECKING,
  ACTION_START_CLEANING,
  ACTION_TYPE_FINISH,
  ACTION_TYPE_START,
  FINISH_CHECKING_TEXT,
  FINISH_CLEANING_TEXT,
  START_CHECKING_TEXT,
  START_CLEANING_TEXT,
  STATUS_CHECK_FINISHED,
  STATUS_CLEAN_FINISHED,
  STATUS_CLEAN_NOT_STARTED,
  STATUS_CLEANED,
  STATUS_IN_PROCESS,
  STATUS_INSPECTED,
  STATUS_IS_CHECKING,
  STATUS_IS_CLEANING,
} from './constants';

/**
 * Direct selector to the roomPage state domain
 */

const selectRoomPageDomain = state => state.roomPage || initialState;
const selectRoomsListPageDomain = state => state.roomsListPage;
const selectAuthDomain = state => state.auth;
const selectRoomFormDomain = state => state.form.roomForm;

const getIsLoading = () =>
  createSelector(
    selectRoomPageDomain,
    substate => substate.isLoading,
  );

const getRoomForm = () =>
  createSelector(
    selectRoomFormDomain,
    substate => substate,
  );

const makeSelectRoomPage = () =>
  createSelector(
    selectRoomPageDomain,
    substate => substate,
  );

const getRoomOrigin = () =>
  createSelector(
    selectRoomPageDomain,
    substate => substate.room,
  );

const getTaskId = () =>
  createSelector(
    selectRoomPageDomain,
    ({ room: Task }) => {
      if (Task && Task._id) {
        return Task._id;
      }
    },
  );

const getRoomId = () =>
  createSelector(
    selectRoomPageDomain,
    substate => substate.room._id,
  );

const userCheckForSupervisor = () =>
  createSelector(
    [selectAuthDomain],
    ({ type }) => checkSupervisorRole(type),
  );

const getUserName = () =>
  createSelector(
    [selectAuthDomain],
    ({ name }) => name,
  );

const getUserType = () =>
  createSelector(
    [selectAuthDomain],
    ({ type }) => type,
  );

// справочник
const getAmenitiesList = () =>
  createSelector(
    selectRoomPageDomain,
    substate => substate.amenitiesList,
  );

const getRoomAmenitiesDefault = () =>
  createSelector(
    getAmenitiesList(),
    amenitiesList => {
      if (amenitiesList) {
        return Object.keys(amenitiesList).reduce(
          (acc, cur) => ({
            ...acc,
            [amenitiesList[cur].name]: amenitiesList[cur].quantity,
          }),
          {},
        );
      }
      return {};
    },
  );

const getRoomAmenities = () =>
  createSelector(
    selectRoomPageDomain,
    substate => substate.room.amenities,
  );

const getRoomAmenitiesWithQuantity = () =>
  createSelector(
    [getRoomAmenities(), getAmenitiesList()],
    (roomAmenities, amenitiesList) => {
      if (roomAmenities && amenitiesList) {
        return amenitiesList.map(amenity => {
          let quantity = 0;
          Object.keys(roomAmenities).forEach(name => {
            if (amenity.name === name) {
              quantity = roomAmenities[name];
            }
          });
          const obj = Object.assign({}, amenity);
          obj.quantity = quantity;
          return obj;
        });
      }
      return [];
    },
  );

// Комната для отправки через форму
const createRequestRoomDataByForm = () =>
  createSelector(
    [
      getRoomSelector(),
      getRoomOrigin(),
      getShowRoomFormControl(),
      getRoomForm(),
    ],
    (
      { userName, userType, statusList, isSupervisor },
      origin,
      showRoomFormControl,
      formData,
    ) => {
      const time = getCurrentTimeMs();
      const { values } = formData;
      const type =
        showRoomFormControl && values.amenities && values.todoList
          ? ACTION_TYPE_FINISH
          : ACTION_TYPE_START;
      const requestRoom = JSON.parse(JSON.stringify(origin));

      switch (type) {
        case ACTION_TYPE_START:
          requestRoom.status = statusList[STATUS_IN_PROCESS];
          requestRoom.userName = userName;
          requestRoom.userType = userType;
          requestRoom.processing = userName;
          if (isSupervisor) {
            // начать проверку
            requestRoom.action = ACTION_START_CHECKING;
            requestRoom.timeStartCheck = time;
          } else {
            // начать уборку
            requestRoom.action = ACTION_START_CLEANING;
            requestRoom.timeStartClean = time;
          }
          break;
        case ACTION_TYPE_FINISH:
          requestRoom.processing = '';
          if (isSupervisor) {
            // закончить проверку
            requestRoom.action = ACTION_CHECKED;
            requestRoom.timeFinishCheck = time;
            requestRoom.comment = values.comments ? values.comments : '';
            requestRoom.checkedBy = userName;
            requestRoom.status = statusList[STATUS_INSPECTED];
          } else {
            // закончить уборку
            requestRoom.action = ACTION_CLEANED;
            requestRoom.timeFinishClean = time;
            requestRoom.cleanedBy = userName;
            requestRoom.status = statusList[STATUS_CLEANED];
          }
          break;
        default:
          return false;
      }

      return requestRoom;
    },
  );

const getToDoListSelector = () =>
  createSelector(
    selectRoomPageDomain,
    ({ room }) => {
      const { todos } = room;
      if (todos && isHavingProps(todos)) {
        return Object.keys(todos).map(key => ({
          name: key,
          value: todos[key],
        }));
      }
      return [];
    },
  );

const getStatusList = () =>
  createSelector(
    selectRoomsListPageDomain,
    ({ statuses }) =>
      Object.keys(statuses).reduce(
        (acc, cur) => ({
          ...acc,
          [statuses[cur].name]: statuses[cur]._id,
        }),
        {},
      ),
  );

const getTimeFinishClean = () =>
  createSelector(
    selectRoomPageDomain,
    ({ room }) => {
      if (room) {
        return room.timeFinishClean
          ? getRoomFormattedDate(room.timeFinishClean)
          : null;
      }
    },
  );

const getTimeStartClean = () =>
  createSelector(
    selectRoomPageDomain,
    ({ room }) => {
      if (room) {
        return room.timeStartClean
          ? getRoomFormattedDate(room.timeStartClean)
          : 'Not Started';
      }
    },
  );

const getCleanType = () =>
  createSelector(
    selectRoomPageDomain,
    substate => {
      const { room } = substate;
      if (room) {
        return room.Task && room.Task.type ? room.Task.type : '';
      }
    },
  );

const getRoomStatus = () =>
  createSelector(
    selectRoomPageDomain,
    substate => {
      const { room } = substate;
      if (room) {
        const {
          timeStartClean,
          timeFinishClean,
          cleanedBy,
          timeStartCheck,
          timeFinishCheck,
          checkedBy,
        } = room;

        if (!cleanedBy && !timeStartClean) {
          return STATUS_CLEAN_NOT_STARTED;
        }
        if (!cleanedBy && timeStartClean && !timeFinishClean) {
          return STATUS_IS_CLEANING;
        }
        if (cleanedBy && timeFinishClean && !timeStartCheck) {
          return STATUS_CLEAN_FINISHED;
        }
        if (!checkedBy && timeStartCheck && !timeFinishCheck) {
          return STATUS_IS_CHECKING;
        }
        if (checkedBy && timeFinishCheck) {
          return STATUS_CHECK_FINISHED;
        }
      }
    },
  );

const getRoomButtonText = () =>
  createSelector(
    [userCheckForSupervisor(), getRoomStatus()],
    (isSupervisor, roomStatus) => {
      if (isSupervisor) {
        switch (roomStatus) {
          case STATUS_CLEAN_FINISHED:
            return START_CHECKING_TEXT;
          case STATUS_IS_CHECKING:
            return FINISH_CHECKING_TEXT;
          default:
            return '';
        }
      } else {
        switch (roomStatus) {
          case STATUS_CLEAN_NOT_STARTED:
            return START_CLEANING_TEXT;
          case STATUS_IS_CLEANING:
            return FINISH_CLEANING_TEXT;
          default:
            return '';
        }
      }
    },
  );

const getShowRoomFormControl = () =>
  createSelector(
    [userCheckForSupervisor(), getRoomStatus()],
    (isSupervisor, status) =>
      (isSupervisor && status === STATUS_IS_CHECKING) ||
      (!isSupervisor && status === STATUS_IS_CLEANING),
  );

const getStatusIsUnstarted = () =>
  createSelector(
    [userCheckForSupervisor(), getRoomStatus()],
    (isSupervisor, status) =>
      (isSupervisor && status === STATUS_CLEAN_FINISHED) ||
      (!isSupervisor && status === STATUS_CLEAN_NOT_STARTED),
  );

const getIsReadyToSubmit = () =>
  createSelector(
    [getStatusIsUnstarted(), getRoomForm()],
    (isUnstarted, formData) => {
      let isReady = false;
      if (isUnstarted) {
        isReady = true;
      } else if (formData && formData.values) {
        const { amenities, todoList } = formData.values;
        if (amenities && todoList) {
          isReady = true;
        }
      }
      return isReady;
    },
  );

const getRoomSelector = () =>
  createSelector(
    [
      selectRoomPageDomain,
      getAmenitiesList(),
      getRoomAmenities(),
      getRoomAmenitiesWithQuantity(),
      getCleanType(),
      getTimeStartClean(),
      getTimeFinishClean(),
      userCheckForSupervisor(),
      getToDoListSelector(),
      getRoomStatus(),
      getRoomButtonText(),
      getStatusList(),
      getTaskId(),
      getUserName(),
      getUserType(),
      getIsReadyToSubmit(),
    ],
    (
      { room },
      amenitiesList,
      roomAmenities,
      roomAmenitiesWithQuantity,
      cleanType,
      timeStartClean,
      timeFinishClean,
      isSupervisor,
      toDoList,
      roomStatus,
      roomButtonText,
      statusList,
      taskId,
      userName,
      userType,
      isReadyToSubmit,
    ) => {
      if (room) {
        return {
          ...room,
          amenitiesList,
          roomAmenities,
          roomAmenitiesWithQuantity,
          timeFinishClean,
          cleanType,
          isSupervisor,
          timeStartClean,
          toDoList,
          roomStatus,
          roomButtonText,
          statusList,
          taskId,
          userName,
          userType,
          isReadyToSubmit,
        };
      }
      return {};
    },
  );

export default makeSelectRoomPage;
export {
  getAmenitiesList,
  getRoomAmenities,
  getRoomAmenitiesWithQuantity,
  getRoomAmenitiesDefault,
  selectRoomPageDomain,
  getRoomForm,
  getRoomSelector,
  getRoomOrigin,
  getRoomId,
  userCheckForSupervisor,
  getRoomButtonText,
  getRoomStatus,
  getShowRoomFormControl,
  getStatusIsUnstarted,
  getStatusList,
  getUserName,
  getUserType,
  createRequestRoomDataByForm,
  getIsReadyToSubmit,
  getIsLoading,
};
