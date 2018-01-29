import React from 'react';
import { Link } from 'react-router-dom';
import { generate as shortIdGenerate } from 'shortid';
import PropTypes from 'prop-types';

const MetaList = (props) => {
  const listItems = props.listItems.map(listItem => (
    <li className="list__item" key={shortIdGenerate()}>
      <Link to={listItem.to}>{listItem.text}</Link>
    </li>
  ));

  let ulClassnames = props.className ? `${props.className} list` : 'list';

  props.modifiers.forEach((modifier) => {
    ulClassnames = `${ulClassnames} list--${modifier}`;
  });

  return <ul className={ulClassnames}>{listItems}</ul>;
};

MetaList.defaultProps = {
  className: '',
  listItems: [
    {
      text: 'Insert Text',
      to: '#',
    },
  ],
  modifiers: [],
};

MetaList.propTypes = {
  className: PropTypes.className,
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }),
  ),
  modifiers: PropTypes.arrayOf(PropTypes.oneOf(['arrows', 'hover', 'underlined'])),
};

export default MetaList;
