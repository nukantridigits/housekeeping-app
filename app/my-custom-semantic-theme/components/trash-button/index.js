import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import { Trash } from 'tabler-icons-react';

const TrashButton = memo(({ onClick }) => (
  <Button icon={() => <Trash size={48} />} color="red" onClick={onClick} />
));

TrashButton.propTypes = {
  onClick: PropTypes.func,
};

export default TrashButton;
