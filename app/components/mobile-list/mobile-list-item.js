/*
 *
 * Mobile-List-Item component
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ChevronRight } from 'tabler-icons-react';
import Avatar from '../avatar/avatar';

const MobileListItem = ({ title, text, subText, img }) => (
  <div className="mobile-list-item card">
    <Avatar name={title} img={img} />
    <div className="mobile-list-item__info">
      <p className="mobile-list-item__info-text">{text}</p>
      <p className="mobile-list-item__info-subtext">{subText}</p>
    </div>
    <ChevronRight size={26} className="mobile-list-item__info-icon" />
  </div>
);

MobileListItem.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  img: PropTypes.string,
};

export { MobileListItem };
