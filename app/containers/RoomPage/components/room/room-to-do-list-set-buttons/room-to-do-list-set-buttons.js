/*
 *
 * Room-To-Do-List-Set-Buttons component
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ThumbUp, ThumbDown } from 'tabler-icons-react';
import './styles.less';

const RoomToDoListSetButtons = ({ name, value, handleOnThumbClick }) => (
  <div className="add-list__item__icons">
    <ThumbUp
      size={23}
      className="add-list__item__icon"
      color={value ? '#3184FF' : '#B5B5B7'}
      onClick={!value ? () => handleOnThumbClick(name, true) : () => false}
    />
    <ThumbDown
      size={23}
      className="add-list__item__icon"
      color={!value ? '#3184FF' : '#B5B5B7'}
      onClick={value ? () => handleOnThumbClick(name, false) : () => false}
    />
  </div>
);

RoomToDoListSetButtons.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  handleOnThumbClick: PropTypes.func.isRequired,
};

export default RoomToDoListSetButtons;
