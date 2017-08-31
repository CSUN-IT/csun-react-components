import React, { Component } from 'react';
import { generate as shortIdGenerate } from 'shortid';
import { NavLink } from 'react-router-dom';
import { typeStyles, typeColors } from './commons/typographyStyles';
import PropTypes from 'prop-types';

class MetaSubNav extends Component {
  render() {
    // Generates each individual sub nav link

    const subNavLinks = this.props.menuItems.map(link =>
      <li className="tab__list" key={shortIdGenerate()}>
        <NavLink exact={link.exact ? link.exact : false} activeClassName={'tab__link--active'} className={`tab__link ${this.props.typeColor ? `type--${this.props.typeColor}` : ''}`} to={link.to}>{link.title}</NavLink>
      </li>,
    );

    return (
      <div className="tab-container">
        <ul className="tabs cf">
          {subNavLinks}
        </ul>
      </div>);
  }
}

MetaSubNav.defaultProps = {
  menuItems: [],
  typeColor: '',
};

MetaSubNav.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    exact: PropTypes.bool,
    typeStyle: PropTypes.oneOf(typeStyles),
  }),
  ),
  typeColor: PropTypes.oneOf(typeColors),
};

export default MetaSubNav;
