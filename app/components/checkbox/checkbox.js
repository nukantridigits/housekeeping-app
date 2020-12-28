/*
 *
 * Checkbox component
 *
 */

import React from 'react';
import { Checkbox as SemanticCheckbox, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Checkbox = ({ input: { value, onChange }, label }) => (
  <Form.Field>
    <SemanticCheckbox
      label={label}
      checked={!!value}
      onChange={(e, { checked }) => onChange(checked)}
    />
  </Form.Field>
);

Checkbox.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

export default Checkbox;
