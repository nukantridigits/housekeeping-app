import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';
import { AddList } from '../../../../components/add-list';
const SetAmenitiesView = ({
  title,
  amenities,
  onIncreaseAmenity,
  onDecreaseAmenity,
  onAddButtonClick,
}) => (
  <div className="set-amenities">
    <div className="set-amenities__title">
      {title}
      <div className="set-amenities__title-border" />
    </div>
    <div className="set-amenities__content">
      <AddList
        data={amenities}
        onPlusClick={onIncreaseAmenity}
        onMinusClick={onDecreaseAmenity}
        onAddButtonClick={onAddButtonClick}
      />
    </div>
  </div>
);

SetAmenitiesView.propTypes = {
  title: PropTypes.string.isRequired,
  onIncreaseAmenity: PropTypes.func.isRequired,
  onDecreaseAmenity: PropTypes.func.isRequired,
  onAddButtonClick: PropTypes.func.isRequired,
  amenities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      _id: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export { SetAmenitiesView };
