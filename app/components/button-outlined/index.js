import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const ButtonOutlined = ({ onClick, text }) => (
  <div
    className="button-outlined"
    onClick={onClick}
    role="button"
    tabIndex="-1"
    onKeyPress={onClick}
  >
    {text}
  </div>
);

ButtonOutlined.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export { ButtonOutlined };
