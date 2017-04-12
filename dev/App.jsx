import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import {
   MetaPrimaryNav,
   MetaBreadcrumbs,
   MetaSubNav,
   MetaButton,
   MetaContainer,
   MetaRow,
   MetaColumn,
   MetaFormField,
   MetaFormGroup,
 } from '../src';

class App extends Component {

  render() {
    const menuItems = [
      {
        title: 'Home',
        to: '',
        active: true,
      },
      {
        title: 'IT',
        to: 'it',
        active: false,
      },
      {
        title: 'Giving',
        to: 'giving',
        active: false,
      },
    ];

    const breadcrumbs = [
      {
        title: 'Home',
        to: '',
        home: true,
      },
      {
        title: 'Documentation',
        typeStyle: 'strike',
      },
      {
        title: 'Breadcrumbs',
      },
    ];

    const subNavMenu = [
      {
        title: 'Nav 1',
        to: 'nav1',
        active: true,
      },
      {
        title: 'Nav 2',
        to: 'nav2',
        active: false,
      },
      {
        title: 'Nav 3',
        to: 'nav3',
        active: false,
      },
    ];

    const formField = {
      id: '1',
      labelText: 'Example 1',
      type: 'text',
      placeholder: 'Example 1',
      inputType: 'textarea',
    };

    const selectFormField = {
      id: '2',
      labelText: 'Options',
      selectOptions: [{
        value: '1',
        text: 'wookie',
      }],
      inputType: 'select',
    };

    const Home = () => (
      <div>
        <h2>Home</h2>
      </div>
    );

    const It = () => (
      <div>
        <h2>It</h2>
      </div>
      );

    const Giving = () => (
      <div>
        <h2>Giving</h2>
      </div>
    );

    return (
      <Router>
        <div className="App">
          <MetaPrimaryNav menuItems={menuItems} navColor={'cream'} />
          <MetaContainer>
            <MetaColumn size={'sm'} value={'12'}>
              <MetaRow>
                <MetaBreadcrumbs breadcrumbItems={breadcrumbs} typeColor={'red'} />
                <MetaFormGroup>
                  <MetaFormField field={formField} size={'sm'} value={'12'} />
                  <MetaFormField field={selectFormField} size={'sm'} value={'12'} />
                </MetaFormGroup>
              </MetaRow>
              <MetaRow>
                <MetaSubNav menuItems={subNavMenu} />
              </MetaRow>
              <MetaRow>
                <MetaButton text={'Activate'} color={'primary'} size={'lg'} btnStyle={'primary-outline'} />
              </MetaRow>
            </MetaColumn>
          </MetaContainer>
          <Route exact path="/" component={Home} />
          <Route path="/it" component={It} />
          <Route path="/giving" component={Giving} />
        </div>
      </Router>
    );
  }
}

export default App;
