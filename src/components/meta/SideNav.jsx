import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { generate as shortIdGenerate } from 'shortid';
import PropTypes from 'prop-types';

class MetaSideNav extends Component {
  render() {
    const navLinks = this.props.menuItems.map((link) => {
      const liClassNames = `nav__item ${link.fill ? 'nav__item--fill' : ''}`;

      return (<li className={liClassNames} key={shortIdGenerate()}>
        <NavLink exact={link.exact ? link.exact : false} activeClassName={'nav__item--active'} className="nav__link" to={link.to}>{ link.title }</NavLink>
      </li>);
    });

    return (<ul className="nav">
      {navLinks}
    </ul>);
  }
}

MetaSideNav.defaultProps = {
  menuItems: [],
  navColor: '',
};

MetaSideNav.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    exact: PropTypes.bool,
    fill: PropTypes.bool,
  }),
  ),
};

export default MetaSideNav;
