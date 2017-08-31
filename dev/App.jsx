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
   QuickResponseButton,
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
          <div style={styles.homeContStyle}>
            <MetaContainer>
              <MetaRow>
                <MetaColumn size={'sm'} value={'6'} offSet={'6'}>
                  <p style={styles.paragraphStyle}>CSUN offers a lot services that students may not know about. Did you know that
                    you can travel the world while doing things such as camping, kayaking, mountain climbing or even playing a sport.
                  </p>
                  <QuickResponseButton
                    button={{
                      title: 'Yes',
                      _id: '599e02e0e4017e0031d5dd93',
                      payload: 'null',
                      content_type: 'text',
                    }}
                  />
                </MetaColumn>
              </MetaRow>
            </MetaContainer>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
