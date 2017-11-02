import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { DocLayout } from './public/wrappers';
import { MetaPrimaryNav, WebHeader } from '../src';

const App = () => {
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

  const menuItems2 = [
    {
      title: 'About IT',
      to: 'https://www.csun.edu/it/about',
      external: true,
    },
    {
      title: 'IT',
      to: 'it',
      external: true,
    },
    {
      title: 'Giving',
      to: 'giving',
      external: true,
    },
  ];

  const secondaryWordmark = {
    to: 'https://www.csun.edu/it',
    title: 'Information\nTechnology',
  };

  const tertiaryWordmark = {
    to: 'https://www.csun.edu/it',
    title: 'Information\nTechnology',
  };

  return (
    <Router>
      <div>
        <WebHeader secondaryWordmark={secondaryWordmark} tertiaryWordmark={tertiaryWordmark} menuItems={menuItems2} />
        <MetaPrimaryNav menuItems={menuItems} navColor={'cream'} subBrand={subBrand} />
        <Route path="/docs" component={DocLayout} />
      </div>
    </Router>
  );
};

export default App;
