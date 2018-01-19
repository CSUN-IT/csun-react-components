import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { generate as shortIdGenerate } from 'shortid';
import { NavLink } from 'react-router-dom';
import MetaRow from '../meta/Row';
import MetaContainer from '../meta/Container';
import './sass/_webHeader.scss';

class WebHeader extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showMobileNav: false,
    };
    this.togglePrimaryNav = this.togglePrimaryNav.bind(this);
  }

  togglePrimaryNav() {
    this.setState({ showMobileNav: !this.state.showMobileNav });
  }
  render() {
    const secondaryWordmark = this.props.secondaryWordmark ? (
      <a href={this.props.secondaryWordmark.to} className="wordmark secondary-wordmark">
        <span className="wordmark--offset">{this.props.secondaryWordmark.title}</span>
      </a>
    ) : null;

    const tertiaryWordmark = this.props.tertiaryWordmark ? (
      <a href={this.props.tertiaryWordmark.to} className="wordmark tertiary-wordmark">
        <span className="wordmark--offset">{this.props.tertiaryWordmark.title}</span>
      </a>
    ) : null;

    const navLinks = this.props.menuItems
      ? this.props.menuItems.map(link => (
        <li key={shortIdGenerate()}>
          {link.external ? (
            <a href={link.to}>{link.title}</a>
            ) : (
              <NavLink exact={link.exact ? link.exact : false} to={link.to}>
                {link.title}
              </NavLink>
            )}
        </li>
        ))
      : null;

    return (
      <div id={this.props.id}>
        <MetaContainer>
          <div className={'header'}>
            <MetaRow className="header-row">
              <div className="wordmark-container">
                <a className={'csun-logo'} href={'http://www.csun.edu'}>
                  <span className="sr-only">California State University, Northridge (CSUN)</span>
                </a>
                {secondaryWordmark}
                {tertiaryWordmark}
              </div>
              <ul className={'list-inline mini-nav pull-right'}>
                <li>
                  <a href={'http://www.csun.edu/universaldesigncenter'}>Accessibility</a>
                </li>|
                <li>
                  <a
                    href={
                      'https://mynorthridge.csun.edu/psc/PANRPRD/EMPLOYEE/EMPL/c/NRPA_CSUN_APPS.NR_PEOPLESRCH_CMP.GBL'
                    }
                  >
                    Directory
                  </a>
                </li>|
                <li>
                  <a href={'http://www.csun.edu/calendar'}>Calendar</a>
                </li>|
                <li>
                  <a href={'http://www.csun.edu/atoz/'}>A to Z</a>
                </li>|
                <li>
                  <a href={'http://www.csun.edu/it/webmail'}>Webmail</a>
                </li>
              </ul>
              <div className="nav-dropdown">
                <button
                  className={`nav-dropdown-button ${this.state.showMobileNav ? 'active' : ''}`}
                  title="Menu"
                  onClick={this.togglePrimaryNav}
                />
              </div>
            </MetaRow>
          </div>
        </MetaContainer>
        {this.props.menuItems ? (
          <div>
            <div className={`web-nav-mobile ${this.state.showMobileNav ? 'active' : ''}`}>
              <ul className="mobile-menu">{navLinks}</ul>
            </div>
            <div className="navbar-link-wrapper">
              <ul className="web-nav navbar-nav navbar-center">{navLinks}</ul>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

WebHeader.defaultProps = {
  secondaryWordmark: null,
  tertiaryWordmark: null,
  showMobileNav: false,
  menuItems: null,
  id: null,
};

WebHeader.propTypes = {
  secondaryWordmark: PropTypes.shape({
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }),
  tertiaryWordmark: PropTypes.shape({
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }),
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      exact: PropTypes.bool,
      external: PropTypes.bool,
    }),
  ),
  id: PropTypes.string,
};

export default WebHeader;
