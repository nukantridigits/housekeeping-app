import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
// import { ChevronDown } from 'tabler-icons-react';

export const ExcelButton = ({ onClick }) => (
  <Button icon color="green" onClick={onClick} size="medium">
    Save to Excel
  </Button>
);

ExcelButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ExcelButton;
