import React from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const FormInputField = ({
  input,
  type,
  placeholder,
  meta: { touched, error },
}) => (
  <div className="input_row">
    <Input {...input} fluid type={type} placeholder={placeholder} />
    {touched && (error && <span className="validation_error">{error}</span>)}
  </div>
);

FormInputField.propTypes = {
  input: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export { FormInputField };
