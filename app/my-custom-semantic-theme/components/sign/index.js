import React, { memo } from 'react';
import './styles.less';
import PropTypes from 'prop-types';

const Sign = memo(({ text, type, icon: Icon }) => (
  <div className={`ui sign sign-${type}`}>
    <div className="ui sign wrapper">
      <Icon size={18} />
      <span className="ui sign text">{text}</span>
    </div>
  </div>
));

Sign.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export { Sign };
