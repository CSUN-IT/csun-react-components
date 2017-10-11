import React from 'react';
import './sass/_webPrimaryNav.scss';

const WebPrimaryNav = () => (
  <div className="navbar-bg">
    <div className="navbar-body">
      <div className="container">
        <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="nav navbar-nav navbar-center">
            <li>
              <a href="http://www.csun.edu/faculty">About IT</a>
            </li>
            <li className="active">
              <a href="http://www.csun.edu/faculty/profiles">Need Help?</a>
            </li>
            <li className="">
              <a href="http://www.csun.edu/faculty/stories">Academic Technology</a>
            </li>
            <li className="">
              <a href="http://www.csun.edu/faculty/scholarship">Training</a>
            </li>
            <li className="">
              <a href="http://www.csun.edu/faculty/about/version-history">Services</a>
            </li>
            <li className="">
              <a href="https://www.csun.edu/faculty/login">Information Security</a>
            </li>
            <li className="">
              <a href="https://www.csun.edu/faculty/login">Zoom</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default WebPrimaryNav;
