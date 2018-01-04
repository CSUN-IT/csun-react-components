import React from 'react';
import PropTypes from 'prop-types';

const MetaTable = props => (
  <div className="table--responsive">
    <table className="table table--striped table--bordered table--padded table--hover">
      <thead>
        <tr>
          <th>Deal One</th>
          <th>Deal Two</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Col 1</td>
          <td>Col 2</td>
        </tr>
      </tbody>
    </table>
  </div>
);

MetaTable.propTypes = {
  test: PropTypes.string.isRequired,
};

export default MetaTable;
