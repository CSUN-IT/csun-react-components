import React from 'react';
import MetaRow from '../meta/Row';
import MetaColumn from '../meta/Column';
import MetaContainer from '../meta/Container';
import './sass/_webPrimaryNav.scss';

const WebPrimaryNav = () => (
  <div className="navbar-bg">
    <div className="navbar-body">
      <div className="container">
        <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="nav navbar-nav navbar-center">
            <li>
              <a href="http://www.csun.edu/faculty">Home</a>
            </li>
            <li className="active">
              <a href="http://www.csun.edu/faculty/profiles">Profiles</a>
            </li>
            <li className="">
              <a href="http://www.csun.edu/faculty/stories">Stories</a>
            </li>
            <li className="">
              <a href="http://www.csun.edu/faculty/scholarship">Scholarship</a>
            </li>
            <li className="">
              <a href="http://www.csun.edu/faculty/about/version-history">About</a>
            </li>
            <li className="">
              <a href="https://www.csun.edu/faculty/login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default WebPrimaryNav;
