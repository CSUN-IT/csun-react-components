import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { generate as shortIdGenerate } from 'shortid';
import PropTypes from 'prop-types';

class MetaList extends Component {
  render() {
    const listItems = this.props.listItems.map(listItem =>
      <li className="list__item" key={shortIdGenerate()}><Link to={listItem.to}>{listItem.text}</Link></li>,
    );

    const ulClassnames = `list ${this.props.modifiers.map(modifier => (`list--${modifier} `))}`;

    return (
      <ul className={ulClassnames}>
        {listItems}
      </ul>
    );
  }
}

MetaList.defaultProps = {
  listItems: [
    {
      text: 'Insert Text',
      to: '#',
    },
  ],
  modifiers: [''],
};

MetaList.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  })),
  modifiers: PropTypes.arrayOf(PropTypes.oneOf([
    'arrows',
    'hover',
    'underlined',
  ])),
};

export default MetaList;
