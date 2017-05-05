import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { generate as shortIdGenerate } from 'shortid';

class MetaPrimaryNav extends Component {
  render() {
    const navLinks = this.props.menuItems.map(link =>
      <li key={shortIdGenerate()}>
        <NavLink exact={link.exact ? link.exact : false} className={'primary-nav__link'} to={link.to}>{ link.title }</NavLink>
      </li>);

    return (<nav className={`primary-nav primary-nav${this.props.navColor ? `--${this.props.navColor}` : ''} `}>
      <div className="container">
        <div className="primary-nav__mobile">
          <div className="primary-nav__btn">
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
          <div className="primary-nav__brand">
            <span className="sr-only">California State University, Northridge (CSUN)</span>
          </div>
        </div>
        <ul className="primary-nav__links">
          {navLinks}
        </ul>
      </div>
    </nav>);
  }
}

MetaPrimaryNav.defaultProps = {
  menuItems: [{}],
  navColor: '',
};

MetaPrimaryNav.propTypes = {
  menuItems: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    to: React.PropTypes.string.isRequired,
    exact: React.PropTypes.bool,
  }),
  ),
  navColor: React.PropTypes.string,
};

export default MetaPrimaryNav;
