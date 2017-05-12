import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { generate as shortIdGenerate } from 'shortid';
import { strEnum } from '../../helpers/tsHelpers';

const ModifierTypes = strEnum([
  'arrows',
  'hover',
  'underlined'
]);

type ModifierTypes = keyof typeof ModifierTypes;

interface MyProps {
  listItems: {
    text: string,
    to: string,
  }[],
  modifiers: ModifierTypes[],
};

class MetaList extends Component<MyProps, undefined> {
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

export default MetaList;
