/*
 *
 * Accordion-Title component
 *
 */

import React from 'react';
import { Accordion as SemanticAccordion } from 'semantic-ui-react';
import { ChevronDown } from 'tabler-icons-react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import Checkbox from '../../checkbox';
import './styles.less';

const AccordionTitle = ({
  title,
  type,
  handleAccordionTitleClick,
  isOpenedContent,
  activeIndex,
}) => (
  <SemanticAccordion.Title
    active={isOpenedContent}
    index={activeIndex}
    onClick={handleAccordionTitleClick}
  >
    <Field name={type} label={title} type="checkbox" component={Checkbox} />
    <ChevronDown
      size="26"
      className="mobile-accordion__chevron-icon accordion_trigger"
    />
  </SemanticAccordion.Title>
);

AccordionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleAccordionTitleClick: PropTypes.func.isRequired,
  isOpenedContent: PropTypes.bool.isRequired,
  activeIndex: PropTypes.number.isRequired,
};

export default AccordionTitle;
