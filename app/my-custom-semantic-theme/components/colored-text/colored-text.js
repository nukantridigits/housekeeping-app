import React, { memo } from 'react';
import './styles.less';

// eslint-disable-next-line react/prop-types
export const ColoredText = memo(({ color, text }) => (
  <span className={`ui text-${color}`}>{text}</span>
));
