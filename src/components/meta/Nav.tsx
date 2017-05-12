import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { generate as shortIdGenerate } from 'shortid';

interface MyState {};
interface MyProps {
  menuItems: {
    title: string,
    to: string,
    exact: boolean
  }[],
  navColor: string,
  subBrand: {
    to: string,
    title: string
  }
};

class MetaPrimaryNav extends Component<MyProps, undefined> {
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
          <a href={'https://www.csun.edu'} className="primary-nav__brand">
            <span className="sr-only">California State University, Northridge (CSUN)</span>
          </a>
          {this.props.subBrand ? <Link to={this.props.subBrand.to} className={'primary-nav__sub-brand'}>
            {this.props.subBrand.title}
          </Link> : ''}
        </div>
        <ul className="primary-nav__links">
          {navLinks}
        </ul>
      </div>
    </nav>);
  }
}

export default MetaPrimaryNav;
