import React from 'react';
import PropTypes from 'prop-types';

const MetaTable = (props) => {
  const className = props.className ? `table-responsive ${props.className}` : `table-responsive`;
  return (
    <div className={className} >
      <table className="table table--striped table--bordered table--padded table--hover">
        {props.children}
      </table>
    </div>
  );
};


MetaTable.defaultProps = {
  className: '',
  header: [],
};

MetaTable.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default MetaTable;
