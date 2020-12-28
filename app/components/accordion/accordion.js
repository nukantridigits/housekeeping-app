/*
 *
 * Accordion component
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AccordionView from './accordion-view';
import './styles.less';

const Accordion = ({
  type,
  data,
  title,
  handleOnThumbClick,
}) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleAccordionTitleClick = (event, titleProps) => {
    const { target } = event;
    if (target.tagName !== 'LABEL') {
      const { index } = titleProps;
      setActiveIndex(!index ? -1 : 0);
    }
  };

  return (
    <AccordionView
      data={data}
      type={type}
      title={title}
      activeIndex={activeIndex}
      isOpenedContent={activeIndex === 0}
      handleAccordionTitleClick={handleAccordionTitleClick}
      handleOnThumbClick={handleOnThumbClick}
    />
  );
};

Accordion.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  handleOnThumbClick: PropTypes.func,
};

export default Accordion;
