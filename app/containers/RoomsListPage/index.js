/**
 *
 * RoomsListPage component
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Loader } from 'semantic-ui-react';
import { useInjectSaga } from '../../utils/injectSaga';
import { useInjectReducer } from '../../utils/injectReducer';
import makeSelectRoomsListPage, {
  getRoomsSelector,
  getIsLoading,
  userCheckForSupervisor,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Header } from '../../components/header/header';
import { MobileList } from '../../components/mobile-list';
import Layout from '../../components/layout';
import { MobileTabs } from '../../components/mobile-tabs';
import { roomsRequest } from './actions';

export function RoomsListPage({ history, rooms, onRoomsRequest, isLoading, isSupervisor }) {
  useInjectReducer({ key: 'roomsListPage', reducer });
  useInjectSaga({ key: 'roomsListPage', saga });
  const handleChangeTab = () => {
    history.push('/amenities');
  };

  useEffect(() => {
    onRoomsRequest();
  }, []);

  return (
    <Layout
      header={<Header title="Rooms" />}
      content={
        !isLoading ? <MobileList data={rooms} url="rooms" /> : <Loader active />
      }
      footer={
        isSupervisor ? (
          <MobileTabs active="rooms" onChangeTab={handleChangeTab} />
        ) : (
          <></>
        )
      }
      footerHeight="50px"
    />
  );
}

RoomsListPage.propTypes = {
  history: PropTypes.object.isRequired,
  rooms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.string,
      subText: PropTypes.string,
      text: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onRoomsRequest: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  roomsListPage: makeSelectRoomsListPage(),
  rooms: getRoomsSelector(),
  isLoading: getIsLoading(),
  isSupervisor: userCheckForSupervisor(),
});

const mapDispatchToProps = {
  onRoomsRequest: roomsRequest,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(RoomsListPage);
