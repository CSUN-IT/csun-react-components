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
  MetaRow,
  MetaColumn,
  MetaChatBubble,
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

    const subBrand = {
      to: '#',
      title: 'CSUN Metaphor React Components',
    };

    const styles = {

      homeContStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      },

      paragraphStyle: {
        fontFamily: 'Open Sans',
        fontSize: '20',
      },
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
