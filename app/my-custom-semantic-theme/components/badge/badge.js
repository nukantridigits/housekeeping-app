import React, { memo } from 'react';
import './styles.less';
import PropTypes from 'prop-types';

const Badge = memo(({ text, type, active }) => (
  <div className={`ui badge badge-${type}${active ? '-active' : ''}`}>
    {text}
  </div>
));

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export { Badge };
