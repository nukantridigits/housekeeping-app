/*
 *
 * Header component
 *
 */

import React from 'react';
import { Bed, Book } from 'tabler-icons-react';
import PropTypes from 'prop-types';
import './styles.less';

const MobileTabs = ({ active, onChangeTab }) => (
  <div className="mobile-tabs">
    <div
      className="mobile-tabs__item"
      onClick={active === 'rooms' ? null : onChangeTab}
      role="button"
      tabIndex={-1}
      onKeyPress={null}
    >
      <Bed color={active === 'rooms' ? '#3184FF' : '#B5B5B7'} size="30" />
    </div>
    <div
      className="mobile-tabs__item"
      onClick={active === 'amenities' ? null : onChangeTab}
      role="button"
      tabIndex={-1}
      onKeyPress={null}
    >
      <Book color={active === 'amenities' ? '#3184FF' : '#B5B5B7'} size="30" />
    </div>
  </div>
);

MobileTabs.propTypes = {
  active: PropTypes.string.isRequired,
  onChangeTab: PropTypes.func.isRequired,
};
export { MobileTabs };
