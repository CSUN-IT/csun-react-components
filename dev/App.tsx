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
 } from '../src';

interface MyProps {};
interface MyState {};

class App extends Component<MyProps, MyState> {
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

    const subBrand = {
      to: '#',
      title: 'CSUN Metaphor React Components',
    };

    return (
      <Router>
        <div>
          <MetaPrimaryNav menuItems={menuItems} navColor={'cream'} subBrand={subBrand} />
          <Route path="/docs" component={DocLayout} />
        </div>
      </Router>
    );
  }
}

export default App;
