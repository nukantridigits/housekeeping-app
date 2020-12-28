import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';
import { ChevronDown, ChevronUp } from 'tabler-icons-react';

const ButtonMore = ({ onClick, open }) => (
  <div
    className="button-more"
    onClick={onClick}
    role="button"
    tabIndex="-1"
    onKeyPress={onClick}
  >
    {open ? 'Hide details' : 'Show details'}
    {open ? (
      <ChevronUp size={12} color="#3184FF" />
    ) : (
      <ChevronDown size={12} color="#3184FF" />
    )}
  </div>
);

ButtonMore.propTypes = {
  onClick: PropTypes.func,
  open: PropTypes.bool.isRequired,
};

export { ButtonMore };
