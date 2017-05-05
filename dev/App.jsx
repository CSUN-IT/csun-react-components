import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import {
   DocLayout,
 } from './public/wrappers';
import {
   MetaPrimaryNav,
   MetaContainer,
 } from '../src';

class App extends Component {
  render() {
    const menuItems = [
      {
        title: 'Home',
        to: '/',
        exact: true,
      },
      {
        title: 'Documentation',
        to: '/docs',
      },
    ];

    return (
      <Router>
        <div>
          <MetaPrimaryNav menuItems={menuItems} navColor={'cream'} />
          <MetaContainer>
            <Route path="/docs" component={DocLayout} />
          </MetaContainer>
        </div>
      </Router>
    );
  }
}

export default App;
