import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';
import { AddList } from '../../../../components/add-list';
// import { ButtonMore } from '../../../../components/button-more';

const AmenitiesReportView = ({
  title,
  amenities,
  // details,
  roomsCleaned,
}) => (
  <>
    <div className="amenities-report">
      <div className="amenities-report__title">{title}</div>
      <div className="amenities-report__content">
        <AddList data={amenities} />
      </div>
      <div className="amenities-report__total">
        <div>Rooms cleaned</div>
        <div>{roomsCleaned}</div>
      </div>
    </div>
    {/* <div className="amenities-report__button-wrapper">
      <ButtonMore open />
    </div> */}
  </>
);

AmenitiesReportView.propTypes = {
  title: PropTypes.string.isRequired,
  amenities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      _id: PropTypes.string.isRequired,
    }).isRequired,
  ),
  roomsCleaned: PropTypes.number.isRequired,
};

export { AmenitiesReportView };
