/**
 *
 * RoomPage component
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
import { getRoomSelector, getIsLoading } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { roomRequest } from './actions';
import Room from './components/room';
import Layout from '../../components/layout';
import { Header } from '../../components/header/header';

export function RoomPage({
  history,
  match: {
    params: { id },
  },
  room,
  onRoomRequest,
  isLoading,
}) {
  useInjectReducer({ key: 'roomPage', reducer });
  useInjectSaga({ key: 'roomPage', saga });
  useEffect(() => {
    onRoomRequest(id);
  }, []);
  const handleBackClick = () => history.push('/rooms');

  return (
    <Layout
      header={
        <Header
          title={room.name ? `Room ${room.name}` : ''}
          onBackClick={handleBackClick}
        />
      }
      content={!isLoading ? <Room room={room} /> : <Loader active />}
    />
  );
}

RoomPage.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  room: PropTypes.shape(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.oneOf([null]).isRequired,
      ]).isRequired,
      roomType: PropTypes.string.isRequired,
      cleanType: PropTypes.string.isRequired,
      cleanedBy: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.oneOf([null]).isRequired,
      ]).isRequired,
      timeFinishClean: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.oneOf([null]).isRequired,
      ]).isRequired,
      timeStartClean: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.oneOf([null]).isRequired,
      ]).isRequired,
      persons: PropTypes.number.isRequired,
      isSupervisor: PropTypes.bool.isRequired,
      roomAmenitiesWithQuantity: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string.isRequired,
          quantity: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
        }),
      ),
      toDoList: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          value: PropTypes.bool.isRequired,
        }),
      ),
      isReadyToSubmit: PropTypes.bool.isRequired,
    }),
  ),
  onRoomRequest: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  room: getRoomSelector(),
  isLoading: getIsLoading(),
});

const mapDispatchToProps = {
  onRoomRequest: roomRequest,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(RoomPage);
