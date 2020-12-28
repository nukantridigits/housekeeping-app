/*
 * Set-Amenities Component
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { SetAmenitiesView } from '../set-amenities-view';
import { getAmenitiesPageTitle, getAmenitiesSelector } from '../../selectors';
import {
  decreaseAmenity,
  increaseAmenity,
  massIncreaseAmenity,
} from '../../actions';
// eslint-disable-next-line no-shadow
const SetAmenities = ({
  amenities,
  onIncreaseAmenity,
  onDecreaseAmenity,
  onMassIncreaseAmenity,
  amenitiesPageTitle,
}) => {
  const handleIncreaseAmenity = id => {
    onIncreaseAmenity({ id, quantity: 1 });
  };
  const handleDecreaseAmenity = (id, quantity) => {
    if (quantity === 0) return;
    onDecreaseAmenity({ id, quantity: 1 });
  };
  const handleAddButtonClick = quantity => {
    onMassIncreaseAmenity(quantity);
  };
  return (
    <SetAmenitiesView
      title={amenitiesPageTitle}
      amenities={amenities}
      onIncreaseAmenity={handleIncreaseAmenity}
      onDecreaseAmenity={handleDecreaseAmenity}
      onAddButtonClick={handleAddButtonClick}
    />
  );
};

SetAmenities.propTypes = {
  amenities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      _id: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onIncreaseAmenity: PropTypes.func.isRequired,
  onDecreaseAmenity: PropTypes.func.isRequired,
  onMassIncreaseAmenity: PropTypes.func.isRequired,
  amenitiesPageTitle: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  amenities: getAmenitiesSelector(),
  amenitiesPageTitle: getAmenitiesPageTitle(),
});

const mapDispatchToProps = {
  onIncreaseAmenity: increaseAmenity,
  onDecreaseAmenity: decreaseAmenity,
  onMassIncreaseAmenity: massIncreaseAmenity,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SetAmenities);
