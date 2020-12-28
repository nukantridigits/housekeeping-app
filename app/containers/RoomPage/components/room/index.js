/*
 *
 * Room component
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import RoomItem from './room-item';
import './index.less';

const Room = ({ room }) => {
  const {
    name,
    img,
    roomType,
    cleanType,
    cleanedBy,
    timeFinishClean,
    timeStartClean,
    persons,
    isSupervisor,
    roomAmenitiesWithQuantity,
    toDoList,
    isReadyToSubmit,
  } = room;
  return (
    <RoomItem
      name={name}
      img={img}
      roomType={roomType}
      cleanType={cleanType}
      cleanedBy={cleanedBy}
      timeFinishClean={timeFinishClean}
      timeStartClean={timeStartClean}
      persons={persons}
      isSupervisor={isSupervisor}
      roomAmenitiesWithQuantity={roomAmenitiesWithQuantity}
      toDoList={toDoList}
      isReadyToSubmit={isReadyToSubmit}
    />
  );
};

Room.propTypes = {
  room: PropTypes.shape(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.oneOf([null]).isRequired,
      ]).isRequired,
      roomType: PropTypes.string.isRequired,
      cleanType: PropTypes.string.isRequired,
      cleanedBy: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.oneOf([null]).isRequired,
      ]).isRequired,
      timeFinishClean: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.oneOf([null]).isRequired,
      ]).isRequired,
      timeStartClean: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.oneOf([null]).isRequired,
      ]).isRequired,
      persons: PropTypes.number.isRequired,
      isSupervisor: PropTypes.bool.isRequired,
      roomAmenitiesWithQuantity: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string.isRequired,
          quantity: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
        }),
      ),
      toDoList: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          value: PropTypes.bool.isRequired,
        }),
      ),
      isReadyToSubmit: PropTypes.bool.isRequired,
    }),
  ),
};

export default Room;
