/*
 *
 * Avatar component
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';
import './index.less';

const Avatar = ({ name, img }) => (
  <div className="avatar">
    {img && <Image src={img} circular />}
    <span className="avatar-text">{name}</span>
  </div>
);

Avatar.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
};

export default Avatar;
