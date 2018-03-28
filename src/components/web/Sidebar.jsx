import React from 'react';
import PropTypes from 'prop-types';
import './sass/_webSidebar.scss';

const WebSidebar = ({ children }) => <div className="sidebar-container">{children} </div>;

WebSidebar.defaultProps = {
  children: {},
};

WebSidebar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WebSidebar;
