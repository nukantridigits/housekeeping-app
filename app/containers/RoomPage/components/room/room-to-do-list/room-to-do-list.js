/*
 *
 * Room-To-Do-List component
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '../../../../../components/accordion';

const RoomToDoList = ({ toDoList, isSupervisor, onUpdateToDoList }) => {
  const handleOnThumbClick = (name, value) => {
    if (isSupervisor) {
      onUpdateToDoList({ name, value });
    }
    return false;
  };

  return (
    <div className="mobile-room-to-do-list mobile-room__accordion-wrapper card">
      <Accordion
        type="todoList"
        title="To do list"
        data={toDoList}
        isSupervisor={isSupervisor}
        handleOnThumbClick={handleOnThumbClick}
      />
    </div>
  );
};

RoomToDoList.propTypes = {
  toDoList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  isSupervisor: PropTypes.bool.isRequired,
  onUpdateToDoList: PropTypes.func.isRequired,
};

export default RoomToDoList;
