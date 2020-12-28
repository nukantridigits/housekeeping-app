/*
 *
 * Room-Amenities component
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '../../../../../components/accordion';

const RoomAmenities = ({ isSupervisor, roomAmenitiesWithQuantity }) => (
  <div className="mobile-room-amenities mobile-room__accordion-wrapper card">
    <Accordion
      type="amenities"
      title="Amenities"
      data={roomAmenitiesWithQuantity}
      isSupervisor={isSupervisor}
    />
  </div>
);

RoomAmenities.propTypes = {
  isSupervisor: PropTypes.bool.isRequired,
  roomAmenitiesWithQuantity: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantityPerBox: PropTypes.number,
      quantityPerRoom: PropTypes.number,
    }),
  ),
};

export default RoomAmenities;
