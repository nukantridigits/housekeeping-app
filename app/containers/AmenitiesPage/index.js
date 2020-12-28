/**
 *
 * AmenitiesPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAmenitiesPage, {
  getUserNameSelector,
  getAmenitiesPageButtonText,
  getAmenitiesSelector,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import Layout from '../../components/layout';
import { Header } from '../../components/header/header';
import SetAmenities from './components/set-amenities';
import { SetAmenitiesActions } from './components/set-amenities-actions';
import {
  addAmenitiesRequest,
  getAmenitesReportRequest,
  massIncreaseAmenity,
} from './actions';
import AmenitiesReport from './components/amenities-report';

export function AmenitiesPage({
  history,
  onMassIncreaseAmenity,
  userName,
  buttonText,
  onAddAmenties,
  onGetAmenitiesReport,
}) {
  useInjectReducer({ key: 'amenitiesPage', reducer });
  useInjectSaga({ key: 'amenitiesPage', saga });

  const handleBackClick = () => history.push('/amenities');
  const handleAddButtonClick = quantity => {
    onMassIncreaseAmenity(quantity);
  };
  const handleSubmitButton = () => {
    onAddAmenties();
  };

  const isReportPage = !buttonText;

  useEffect(() => {
    if (isReportPage) {
      onGetAmenitiesReport();
    }
  }, [isReportPage]);

  return (
    <Layout
      header={<Header title={userName} onBackClick={handleBackClick} />}
      content={!isReportPage ? <SetAmenities /> : <AmenitiesReport />}
      footer={
        !isReportPage && (
          <SetAmenitiesActions
            buttonText={buttonText}
            onAddButtonClick={handleAddButtonClick}
            onSubmit={handleSubmitButton}
          />
        )
      }
      footerHeight="140px"
    />
  );
}

AmenitiesPage.propTypes = {
  history: PropTypes.object.isRequired,
  onMassIncreaseAmenity: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onAddAmenties: PropTypes.func.isRequired,
  onGetAmenitiesReport: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  amenitiesPage: makeSelectAmenitiesPage(),
  userName: getUserNameSelector(),
  buttonText: getAmenitiesPageButtonText(),
  amenities: getAmenitiesSelector(),
});

const mapDispatchToProps = {
  onMassIncreaseAmenity: massIncreaseAmenity,
  onAddAmenties: addAmenitiesRequest,
  onGetAmenitiesReport: getAmenitesReportRequest,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AmenitiesPage);
