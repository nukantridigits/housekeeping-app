/*
 *
 * AddList component
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Minus, Plus } from 'tabler-icons-react';
import './styles.less';

const AddList = ({ data, onPlusClick, onMinusClick }) => (
  <div className="add-list">
    {data.map(({ name, quantity, _id }) => (
      <div className="add-list__item" key={_id}>
        <div className="add-list__item__name">{name}</div>
        {onPlusClick && onMinusClick ? (
          <div className="add-list__item__counter">
            <Minus
              color="#B5B5B7"
              onClick={() => onMinusClick(_id, quantity, name)}
            />
            <span className="add-list__item__counter__number">{quantity}</span>
            <Plus
              color="#B5B5B7"
              onClick={() => onPlusClick(_id, quantity, name)}
            />
          </div>
        ) : (
          <span className="add-list__item__counter__number">{quantity}</span>
        )}
      </div>
    ))}
  </div>
);

AddList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      _id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onPlusClick: PropTypes.func,
  onMinusClick: PropTypes.func,
};

export { AddList };
