import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';
import { Button } from 'semantic-ui-react';
import { ButtonOutlined } from '../../../../components/button-outlined';

const SetAmenitiesActions = ({ buttonText, onAddButtonClick, onSubmit }) => (
  <div className="set-amenities-actions">
    <div className="set-amenities-actions__buttons">
      {[10, 20, 30, 40].map(num => (
        <div className="set-amenities-actions__button-wrapper" key={num}>
          <ButtonOutlined
            text={`+ ${num}`}
            onClick={() => onAddButtonClick(num)}
          />
        </div>
      ))}
    </div>
    {buttonText && (
      <div className="set-amenities-actions__main-button">
        <Button primary onClick={onSubmit}>
          {buttonText}
        </Button>
      </div>
    )}
  </div>
);

SetAmenitiesActions.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onAddButtonClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export { SetAmenitiesActions };
