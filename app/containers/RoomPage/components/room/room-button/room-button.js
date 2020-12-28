/*
 *
 * Room-Button component
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import './styles.less';

const RoomButton = ({ text, isDisabled }) => (
  <div className="mobile-room-button">
    <Button primary className="large" disabled={isDisabled} type="submit">
      {text}
    </Button>
  </div>
);

RoomButton.propTypes = {
  text: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
export default RoomButton;
