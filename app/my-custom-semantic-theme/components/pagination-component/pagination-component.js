import React, { memo } from 'react';
import { Pagination } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './styles.less';

const PaginationComponent = memo(({ totalPages, activePage, onPageChange }) => (
  <div className="rooms-pagination-wrapper">
    <Pagination
      totalPages={totalPages}
      firstItem={null}
      lastItem={null}
      onPageChange={onPageChange}
      activePage={activePage}
    />
  </div>
));

PaginationComponent.propTypes = {
  totalPages: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export { PaginationComponent };
