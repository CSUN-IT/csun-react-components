import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { generate as shortIdGenerate } from 'shortid';
import './sass/_webPrimaryNav.scss';

const WebPrimaryNav = (props) => {
  const navLinks = props.menuItems.map(link => (
    <li key={shortIdGenerate()}>
      {link.external ? <a to={link.to}>{link.title}</a>
        : <NavLink exact={link.exact ? link.exact : false} to={link.to}>
          {link.title}
        </NavLink>}
    </li>
  ));

  return (<div className="navbar-bg">
    <div className="navbar-body">
      <div className="container">
        <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="web-nav navbar-nav navbar-center">
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
};

WebPrimaryNav.defaultProps = {
  menuItems: null,
};

WebPrimaryNav.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      exact: PropTypes.bool,
      external: PropTypes.bool,
    }),
  ),
};

export default WebPrimaryNav;
