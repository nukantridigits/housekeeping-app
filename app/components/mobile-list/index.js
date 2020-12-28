/*
 *
 * Rooms component
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MobileListItem } from './mobile-list-item';
import './index.less';

const MobileList = ({ data, url }) => (
  <div className="mobile-list">
    {data &&
      data.map(item => (
        <Link to={`/${url}/${item.id}`} key={item.id}>
          <MobileListItem {...item} />
        </Link>
      ))}
  </div>
);

MobileList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string.isRequired,
      subText: PropTypes.string.isRequired,
      img: PropTypes.string,
    }),
  ).isRequired,
  url: PropTypes.string,
};

export { MobileList };
