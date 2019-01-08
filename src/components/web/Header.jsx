import React, { Component } from "react";
import PropTypes from "prop-types";
import { generate as shortIdGenerate } from "shortid";
import { NavLink } from "react-router-dom";
import MetaRow from "../meta/Row";
import MetaContainer from "../meta/Container";
import "./sass/_webHeader.scss";
import "./sass/_webHeaderSearch.scss";

class WebHeader extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showMobileNav: false,
      value: ""
    };
    this.togglePrimaryNav = this.togglePrimaryNav.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  togglePrimaryNav() {
    this.setState({ showMobileNav: !this.state.showMobileNav });
  }
  render() {
    const secondaryWordmark = this.props.secondaryWordmark ? (
      <a
        href={this.props.secondaryWordmark.to}
        className="wordmark secondary-wordmark"
      >
        <span className="wordmark--offset">
          {this.props.secondaryWordmark.title}
        </span>
      </a>
    ) : null;

    const tertiaryWordmark = this.props.tertiaryWordmark ? (
      <a
        href={this.props.tertiaryWordmark.to}
        className="wordmark tertiary-wordmark"
      >
        <span className="wordmark--offset">
          {this.props.tertiaryWordmark.title}
        </span>
      </a>
    ) : null;

    const navLinks = this.props.menuItems
      ? this.props.menuItems.map(link => (
          <li key={shortIdGenerate()}>
            {link.external ? (
              <a href={link.to} role="menuitem">
                {link.title}
              </a>
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
          <div className={"header"}>
            <MetaRow className="header-row">
              {this.props.contentID && (
                <a
                  className="sr-only sr-only-focusable"
                  href={this.props.contentID}
                >
                  Skip to Content
                </a>
              )}
              <div className="wordmark-container">
                <a className={"csun-logo"} href={"http://www.csun.edu"}>
                  <span className="sr-only">
                    California State University, Northridge (CSUN)
                  </span>
                </a>
                {secondaryWordmark}
                {tertiaryWordmark}
              </div>
              <div className="header-utilities">
                <ul className={"list-inline mini-nav pull-right"}>
                  <li>
                    <a href={"http://www.csun.edu/universaldesigncenter"}>
                      Accessibility
                    </a>
                  </li>
                  |
                  <li>
                    <a
                      href={
                        "https://mynorthridge.csun.edu/psc/PANRPRD/EMPLOYEE/EMPL/c/NRPA_CSUN_APPS.NR_PEOPLESRCH_CMP.GBL"
                      }
                    >
                      Directory
                    </a>
                  </li>
                  |
                  <li>
                    <a href={"http://www.csun.edu/calendar"}>Calendar</a>
                  </li>
                  |
                  <li>
                    <a href={"http://www.csun.edu/atoz/"}>A to Z</a>
                  </li>
                  |
                  <li>
                    <a href={"http://www.csun.edu/it/webmail"}>Webmail</a>
                  </li>
                </ul>
                <div className="panel-pane pane-block pane-google-appliance-ga-block-search-form bg-white desktop-only">
                  <form action="/search" method="GET" accept-charset="UTF-8">
                    <div className="search-container">
                      <div className="form-item form-type-textfield form-item-search-keys">
                        <label
                          className="sr-only"
                          for="edit-search-keys-desktop"
                        >
                          Enter the terms you wish to search for.{" "}
                        </label>
                        <input
                          type="text"
                          id="edit-search-keys-desktop"
                          name="query"
                          value=""
                          size="15"
                          maxlength="128"
                          className="form-text"
                          value={this.state.value}
                          onChange={this.handleChange}
                        />
                      </div>

                      <input type="hidden" name="col" value="15" />
                      <div
                        className="form-actions form-wrapper"
                        id="edit-actions"
                      >
                        <input
                          type="submit"
                          id="edit-submit-desktop"
                          value="Search"
                          className="form-submit"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="nav-dropdown">
                <button
                  className={`nav-dropdown-button ${
                    this.state.showMobileNav ? "active" : ""
                  }`}
                  title="Menu"
                  onClick={this.togglePrimaryNav}
                  aria-expanded={`${
                    this.state.showMobileNav ? "true" : "false"
                  }`}
                  aria-pressed={`${
                    this.state.showMobileNav ? "true" : "false"
                  }`}
                />
              </div>
            </MetaRow>
          </div>
        </MetaContainer>
        {this.props.menuItems ? (
          <div>
            <div
              className={`web-nav-mobile ${
                this.state.showMobileNav ? "active" : ""
              }`}
            >
              <div className="mobile-only">
                <div className="panel-pane pane-block pane-google-appliance-ga-block-search-form bg-white">
                  <form action="/search" method="GET" accept-charset="UTF-8">
                    <div className="search-container">
                      <div className="form-item form-type-textfield form-item-search-keys">
                        <label className="sr-only" for="edit-search-keys">
                          Enter the terms you wish to search for.{" "}
                        </label>
                        <input
                          type="text"
                          id="edit-search-keys"
                          name="query"
                          value=""
                          size="15"
                          maxlength="128"
                          className="form-text"
                        />
                      </div>

                      <input type="hidden" name="col" value="15" />
                      <div
                        className="form-actions form-wrapper"
                        id="edit-actions"
                      >
                        <input
                          type="submit"
                          id="edit-submit"
                          value="Search"
                          className="form-submit"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <ul className="layout-csun--mobile-links">
                  <li>
                    <a href="https://auth.csun.edu/cas/login?service=https://mynorthridge.csun.edu/psp/PANRPRD/?cmd=login&amp;languageCd=ENG">
                      Portal
                    </a>
                  </li>
                  <li>
                    <a href="http://www.csun.edu/webmail">Webmail</a>
                  </li>
                  <li>
                    <a href="http://www.csun.edu/peoplefinder">Directory</a>
                  </li>
                  <li>
                    <a href="https://canvas.csun.edu/">Canvas</a>
                  </li>
                </ul>
              </div>
              <ul className="mobile-menu" role="menu">
                {navLinks}
              </ul>
            </div>
            <div className="navbar-link-wrapper">
              <ul className="web-nav navbar-nav navbar-center" role="menu">
                {navLinks}
              </ul>
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
  contentID: "",
  menuItems: null,
  id: null
};

WebHeader.propTypes = {
  contentID: PropTypes.string,
  secondaryWordmark: PropTypes.shape({
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
  }),
  tertiaryWordmark: PropTypes.shape({
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
  }),
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      exact: PropTypes.bool,
      external: PropTypes.bool
    })
  ),
  id: PropTypes.string
};

export default WebHeader;
