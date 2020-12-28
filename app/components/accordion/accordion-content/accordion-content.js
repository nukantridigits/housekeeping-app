/*
 *
 * Accordion-Content component
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Accordion as SemanticAccordion } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { userCheckForSupervisor } from '../../../containers/RoomPage/selectors';
import {
  increaseAmenity,
  decreaseAmenity,
} from '../../../containers/RoomPage/actions';
import { AddList } from '../../add-list';
import RoomToDoListView from '../../../containers/RoomPage/components/room/room-to-do-list-view';
import './styles.less';

const AccordionContent = ({
  data,
  type,
  isOpenedContent,
  handleOnThumbClick,
  isSupervisor,
  onIncreaseAmenity,
  onDecreaseAmenity,
}) => {
  const handleIncreaseAmenity = (id, quantity, name) => {
    onIncreaseAmenity({ id, quantity: 1, name });
  };
  const handleDecreaseAmenity = (id, quantity, name) => {
    if (quantity === 0) return;
    onDecreaseAmenity({ id, quantity: 1, name });
  };
  return (
    <SemanticAccordion.Content active={isOpenedContent}>
      {type === 'amenities' && (
        <AddList
          data={data}
          onPlusClick={!isSupervisor ? handleIncreaseAmenity : null}
          onMinusClick={!isSupervisor ? handleDecreaseAmenity : null}
        />
      )}
      {type === 'todoList' && (
        <RoomToDoListView
          data={data}
          handleOnThumbClick={handleOnThumbClick}
          isSupervisor={isSupervisor}
        />
      )}
    </SemanticAccordion.Content>
  );
};

AccordionContent.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  isOpenedContent: PropTypes.bool.isRequired,
  handleOnThumbClick: PropTypes.func,
  isSupervisor: PropTypes.bool.isRequired,
  onIncreaseAmenity: PropTypes.func,
  onDecreaseAmenity: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isSupervisor: userCheckForSupervisor(),
});

const mapDispatchToProps = {
  onIncreaseAmenity: increaseAmenity,
  onDecreaseAmenity: decreaseAmenity,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AccordionContent);
