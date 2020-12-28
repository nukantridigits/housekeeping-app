/*
 *
 * Room-To-Do-List-View component
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';
import { Checkbox } from 'semantic-ui-react';
import RoomToDoListSetButtons from '../room-to-do-list-set-buttons';

const RoomToDoListView = ({ data, isSupervisor, handleOnThumbClick }) => (
  <div className="room-to-do-list-view add-list">
    {data.map(todo => (
      <div className="add-list__item" key={todo.name}>
        {isSupervisor ? (
          <>
            <div className="add-list__item__name">{todo.name}</div>
            <RoomToDoListSetButtons
              name={todo.name}
              value={todo.value}
              handleOnThumbClick={handleOnThumbClick}
            />
          </>
        ) : (
          <Checkbox label={todo.name} className="label-left" />
        )}
      </div>
    ))}
  </div>
);

RoomToDoListView.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  handleOnThumbClick: PropTypes.func.isRequired,
  isSupervisor: PropTypes.bool.isRequired,
};

export default RoomToDoListView;
