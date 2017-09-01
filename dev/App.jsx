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
  MetaChatBubble,
} from '../src';
import messages from './messages.json';

import bot from './apiWrapper';

class App extends Component {
  render() {
    var bottMessage = bot.sendMessage('hello');
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
          <div style={{ marginTop: '10', marginLeft: '10' }}>
            <MetaChatBubble text={bottMessage} subText="Today at 3:23pm" receiver />
            <br />
            <MetaChatBubble text="Hey Matty, I forgot my password!" subText="Today at 3:26pm" receiver={false} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
