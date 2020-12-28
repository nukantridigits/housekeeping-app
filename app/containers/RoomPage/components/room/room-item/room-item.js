/*
 *
 * Room-Item component
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import RoomForm from '../room-form';
import RoomItemDescription from '../room-item-description';

const RoomItem = ({
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
}) => (
  <>
    <div className="mobile-room">
      <div className="mobile-room-wrapper">
        <RoomItemDescription
          isSupervisor={isSupervisor}
          name={name}
          img={img}
          roomType={roomType}
          cleanType={cleanType}
          cleanedBy={cleanedBy}
          timeFinishClean={timeFinishClean}
          timeStartClean={timeStartClean}
          persons={persons}
        />
        <RoomForm
          isSupervisor={isSupervisor}
          roomAmenitiesWithQuantity={roomAmenitiesWithQuantity}
          toDoList={toDoList}
          isReadyToSubmit={isReadyToSubmit}
        />
      </div>
    </div>
  </>
);

RoomItem.defaultProps = {
  timeFinishClean: null,
  timeStartClean: null,
};

RoomItem.propTypes = {
  name: PropTypes.string.isRequired,
  roomType: PropTypes.string.isRequired,
  img: PropTypes.string,
  cleanType: PropTypes.string.isRequired,
  cleanedBy: PropTypes.string.isRequired,
  timeFinishClean: PropTypes.string,
  timeStartClean: PropTypes.string,
  persons: PropTypes.number.isRequired,
  isSupervisor: PropTypes.bool.isRequired,
  roomAmenitiesWithQuantity: PropTypes.array.isRequired,
  toDoList: PropTypes.array.isRequired,
  isReadyToSubmit: PropTypes.bool.isRequired,
};

export default RoomItem;
