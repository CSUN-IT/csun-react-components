import React from 'react';
import PropTypes from 'prop-types';
import { generate as shortIdGenerate } from 'shortid';

const MetaTable = (props) => {
  const header = props.header.map(headerItem => (<th key={shortIdGenerate()}>{headerItem}</th>));
  const body = props.body.map(bodyRow =>
    (<tr key={shortIdGenerate()}>
      {bodyRow.map(content => <td key={shortIdGenerate()}>{content}</td>)}
    </tr>),
  );

  return (
    <div className="table--responvie">
      <table className="table table--striped table--bordered table--padded table--hover">
        <thead>
          <tr>
            {header}
          </tr>
        </thead>
        <tbody>
          {body}
        </tbody>
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
  header: PropTypes.arrayOf(PropTypes.string),
  body: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string).isRequired).isRequired,
};

export default MetaTable;
