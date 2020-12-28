/*
 *
 * Room-Form component
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  getRoomButtonText,
  getRoomForm,
  getShowRoomFormControl,
  getStatusIsUnstarted,
} from '../../../selectors';
import { roomUpdateRequest, updateToDoList } from '../../../actions';
import RoomAmenities from '../room-amenities';
import RoomToDoList from '../room-to-do-list';
import RoomComments from '../room-comments';
import RoomButton from '../room-button';
import './styles.less';
import { pageList } from '../../../../Router/pageList';

const RoomForm = ({
  roomAmenitiesWithQuantity,
  toDoList,
  showFormControl,
  isUnstarted,
  isSupervisor,
  onRoomUpdateRequest,
  onUpdateToDoList,
  handleSubmit,
  buttonText,
  isReadyToSubmit,
}) => {
  const onSubmit = () => {
    onRoomUpdateRequest({
      route: !isUnstarted ? pageList.rooms.path : null,
      roomUpdateOnSuccess: true,
    });
  };

  return (
    <div className="room-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        {showFormControl && (
          <>
            <RoomAmenities
              roomAmenitiesWithQuantity={roomAmenitiesWithQuantity}
              isSupervisor={isSupervisor}
            />
            <RoomToDoList
              toDoList={toDoList}
              onUpdateToDoList={onUpdateToDoList}
              isSupervisor={isSupervisor}
            />
            {isSupervisor && (
              <RoomComments name="comments" label="Type something..." />
            )}
          </>
        )}
        <RoomButton text={buttonText} isDisabled={!isReadyToSubmit} />
      </form>
    </div>
  );
};

RoomForm.propTypes = {
  roomAmenitiesWithQuantity: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  toDoList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  isSupervisor: PropTypes.bool.isRequired,
  showFormControl: PropTypes.bool.isRequired,
  isUnstarted: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isReadyToSubmit: PropTypes.bool.isRequired,
  buttonText: PropTypes.string.isRequired,
  onRoomUpdateRequest: PropTypes.func.isRequired,
  onUpdateToDoList: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onRoomUpdateRequest: roomUpdateRequest,
  onUpdateToDoList: updateToDoList,
};

const mapStateToProps = createStructuredSelector({
  formData: getRoomForm(),
  buttonText: getRoomButtonText(),
  showFormControl: getShowRoomFormControl(),
  isUnstarted: getStatusIsUnstarted(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(
  reduxForm({
    form: 'roomForm',
  })(RoomForm),
);
