/*
 *
 * Room-Item-Description component
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../../../../components/avatar/avatar';
import './styles.less';

const RoomItemDescription = ({
  name,
  img,
  roomType,
  cleanType,
  cleanedBy,
  timeFinishClean,
  timeStartClean,
  persons,
  isSupervisor,
}) => (
  <div className="mobile-room-description card">
    <Avatar name={name} img={img} />
    <div className="mobile-room-description__info">
      <p className="mobile-room-description__info-text">{roomType}</p>
      <p className="mobile-room-description__info-subtext">{`Clean type: ${cleanType}`}</p>
      {isSupervisor && cleanedBy && (
        <p className="mobile-room-description__info-subtext">{`Cleaned by: ${cleanedBy}`}</p>
      )}
      {isSupervisor && timeFinishClean && (
        <p className="mobile-room-description__info-subtext">{`Finished: ${timeFinishClean}`}</p>
      )}
      {(!isSupervisor || (isSupervisor && !timeFinishClean)) && (
        <p className="mobile-room-description__info-subtext">{`Started: ${timeStartClean}`}</p>
      )}
      <p className="mobile-room-description__info-subtext">{`Persons: ${persons}`}</p>
    </div>
  </div>
);

RoomItemDescription.defaultProps = {
  timeFinishClean: null,
  timeStartClean: null,
};

RoomItemDescription.propTypes = {
  name: PropTypes.string.isRequired,
  roomType: PropTypes.string.isRequired,
  img: PropTypes.string,
  cleanType: PropTypes.string.isRequired,
  cleanedBy: PropTypes.string.isRequired,
  timeFinishClean: PropTypes.string,
  timeStartClean: PropTypes.string,
  persons: PropTypes.number.isRequired,
  isSupervisor: PropTypes.bool.isRequired,
};

export default RoomItemDescription;
