import React, { memo } from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const TableComponent = memo(({ columns, rows }) => (
  <Table>
    <Table.Header fullWidth className="Table-header">
      <Table.Row>
        {columns.map(({ name }) => (
          <Table.HeaderCell key={name}>{name}</Table.HeaderCell>
        ))}
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {rows.map(row => (
        // eslint-disable-next-line no-underscore-dangle
        <Table.Row key={row._id}>
          {columns.map(({ id, customComponent: CustomComponent }) => {
            if (CustomComponent) {
              return (
                <Table.Cell key={id}>
                  <CustomComponent rowData={row} />
                </Table.Cell>
              );
            }
            return <Table.Cell key={id}>{row[id]}</Table.Cell>;
          })}
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
));

TableComponent.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      customComponent: PropTypes.object,
    }),
  ),
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { TableComponent };
