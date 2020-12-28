/*
 *
 * Accordion-View component
 *
 */

import React from 'react';
import { Accordion as SemanticAccordion } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import AccordionTitle from '../accordion-title';
import AccordionContent from '../accordion-content';

const AccordionView = ({
  data,
  type,
  title,
  handleAccordionTitleClick,
  activeIndex,
  isOpenedContent,
  handleOnThumbClick,
}) => (
  <div className="mobile-accordion">
    <SemanticAccordion>
      <AccordionTitle
        title={title}
        type={type}
        handleAccordionTitleClick={handleAccordionTitleClick}
        isOpenedContent={isOpenedContent}
        activeIndex={activeIndex}
      />
      {data && (
        <AccordionContent
          data={data}
          type={type}
          isOpenedContent={isOpenedContent}
          handleOnThumbClick={handleOnThumbClick}
        />
      )}
    </SemanticAccordion>
  </div>
);

AccordionView.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleAccordionTitleClick: PropTypes.func.isRequired,
  activeIndex: PropTypes.number.isRequired,
  isOpenedContent: PropTypes.bool.isRequired,
  handleOnThumbClick: PropTypes.func,
};

export default AccordionView;
