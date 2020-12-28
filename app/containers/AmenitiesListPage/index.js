/**
 *
 * AmenitiesListPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { getUsersSelector } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Layout from '../../components/layout';
import { Header } from '../../components/header/header';
import { MobileTabs } from '../../components/mobile-tabs';
import { MobileList } from '../../components/mobile-list';
import { requestAllUsers } from './actions';

export function AmenitiesListPage({ history, users, onRequestAllUsers }) {
  useInjectReducer({ key: 'amenitiesListPage', reducer });
  useInjectSaga({ key: 'amenitiesListPage', saga });

  useEffect(() => {
    onRequestAllUsers();
  }, []);

  const handleChangeTab = () => {
    history.push('/rooms');
  };
  return (
    <Layout
      header={<Header title="Maidens" />}
      content={<MobileList data={users} url="amenities" />}
      footer={<MobileTabs active="amenities" onChangeTab={handleChangeTab} />}
      footerHeight="50px"
    />
  );
}

AmenitiesListPage.propTypes = {
  history: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  onRequestAllUsers: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  users: getUsersSelector(),
});

const mapDispatchToProps = {
  onRequestAllUsers: requestAllUsers,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AmenitiesListPage);
