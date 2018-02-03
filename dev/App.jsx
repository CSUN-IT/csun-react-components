import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import './App.css';
import { DocLayout } from './public/wrappers';
import { DocMain } from './public/pages';
import { MetaPrimaryNav } from '../src';

const App = () => {
  const menuItems = [
    {
      title: 'Home',
      to: '/home',
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
        <Route path="/home" component={DocMain} />
        <Route path="/docs" component={DocLayout} />
      </div>
    </Router>
  );
};

export default App;
