import React from 'react';
import PropTypes from 'prop-types';
import { generate as shortIdGenerate } from 'shortid';

const MetaTable = (props) => {
  return (
    <div className="table--responvie">
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
