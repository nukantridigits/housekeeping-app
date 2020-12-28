/*
 *
 * Textarea component
 *
 */

import React from 'react';
import { TextArea as SemanticTextArea } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './styles.less';

const TextArea = ({ input: { onChange }, label }) => (
  <SemanticTextArea
    onChange={(e, data) => onChange(data.value)}
    placeholder={label}
  />
);

TextArea.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
};

export default TextArea;
