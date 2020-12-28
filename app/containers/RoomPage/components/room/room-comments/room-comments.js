/*
 *
 * Room-Comments component
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import TextArea from '../../../../../components/textarea';

const RoomComments = ({ name, label }) => (
  <div className="mobile-room-comments ui form">
    <p className="mobile-room-comments__title">Comment</p>
    <Field name={name} component={TextArea} label={label} />
  </div>
);

RoomComments.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default RoomComments;
