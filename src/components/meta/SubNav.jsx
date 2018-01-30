import React from 'react';
import PropTypes from 'prop-types';
import { generate as shortIdGenerate } from 'shortid';
import { NavLink } from 'react-router-dom';
import { typeStyles, typeColors } from './commons/typographyStyles';

const MetaSubNav = (props) => {
  // Generates each individual sub nav link

  const subNavLinks = props.menuItems.map(link => (
    <li className="tab__list" key={shortIdGenerate()}>
      <NavLink
        exact={link.exact ? link.exact : false}
        activeClassName={'tab__link--active'}
        className={`tab__link ${props.typeColor ? `type--${props.typeColor}` : ''}`}
        to={link.to}
      >
        {link.title}
      </NavLink>
    </li>
  ));

  return (
    <div className={`${props.className} tab-container`}>
      <ul className="tabs cf">{subNavLinks}</ul>
    </div>
  );
};

MetaSubNav.defaultProps = {
  menuItems: [],
  typeColor: '',
  className: '',
};

MetaSubNav.propTypes = {
  className: PropTypes.string,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      exact: PropTypes.bool,
      typeStyle: PropTypes.oneOf(typeStyles),
    }),
  ),
  typeColor: PropTypes.oneOf(typeColors),
};

export default MetaSubNav;
