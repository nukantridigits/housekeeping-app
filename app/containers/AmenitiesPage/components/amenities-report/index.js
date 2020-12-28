import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { getAmenitiesReport } from '../../selectors';
import { getAmenitesReportRequest } from '../../actions';
import { AmenitiesReportView } from '../amenites-report-view';

const AmenitiesReport = ({ amenitiesReport }) =>
  amenitiesReport.roomsCleaned && (
    <AmenitiesReportView
      amenities={amenitiesReport.total}
      roomsCleaned={amenitiesReport.roomsCleaned}
      details={amenitiesReport.details}
      title="Amenities left"
    />
  );
AmenitiesReport.propTypes = {
  amenitiesReport: PropTypes.shape({
    total: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        _id: PropTypes.string.isRequired,
      }),
    ),
    details: PropTypes.array.isRequired,
    roomsCleaned: PropTypes.number.isRequired,
  }).isRequired,
  onGetAmenitiesReport: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  amenitiesReport: getAmenitiesReport(),
});

const mapDispatchToProps = {
  onGetAmenitiesReport: getAmenitesReportRequest,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AmenitiesReport);
