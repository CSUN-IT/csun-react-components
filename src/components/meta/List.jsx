import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { generate as shortIdGenerate } from 'shortid';

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
  listItems: React.PropTypes.arrayOf(React.PropTypes.shape({
    text: React.PropTypes.string.isRequired,
    to: React.PropTypes.string.isRequired,
  })),
  modifiers: React.PropTypes.arrayOf(React.PropTypes.oneOf([
    'arrows',
    'hover',
    'underlined',
  ])),
};

export default MetaList;
