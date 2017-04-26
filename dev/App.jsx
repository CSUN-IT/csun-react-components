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
   MetaTag,
   MetaPanel,
   MetaFormField,
   MetaFormGroup,
   MetaAlert,
   MetaList,
   MetaTable,
   MetaSideNav,
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

    const sideNavItems = [
      {
        title: 'Home',
        to: '',
        active: true,
      },
      {
        title: 'IT',
        to: 'it',
        active: false,
        fill: true,
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

    const listItems = [
      {
        text: 'Nav 1',
        to: 'nav1',
      },
      {
        text: 'Nav 2',
        to: 'nav2',
      },
    ];

    const headerItems = [
      {
        headerTitle: 'Title 1',
      },
      {
        headerTitle: 'Title 2',
        headerStyle: ['italic'],
      },
      {
        headerTitle: 'Title 3',
        headerStyle: ['italic'],
      },
    ];

    const rows = [
      {
        row: [
          {
            text: 'Sample text',
            textStyle: ['strike', 'bold'],
          },
          {
            text: 'Another sample',
            textStyle: ['italic'],
          },
          {
            text: 'Beep Boop',
            textStyle: ['bold'],
          },
        ],
      },
    ];

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
        <div>
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
                {/*<MetaSubNav menuItems={subNavMenu} />*/}
                <MetaButton text={'Activate'} color={'primary'} size={'lg'} btnStyle={'primary-outline'} />
              </MetaRow>
              <MetaRow>
                <MetaButton text={'Activate'} color={'primary'} size={'lg'} btnStyle={'primary-outline'} />
              </MetaRow>
              <MetaRow>
                <MetaTag text={'Tag'} color={'success'} to={''} action={'close'} />
              </MetaRow>
              <MetaRow>
                <MetaPanel panelHeader={{ text: 'Panel Header' }} panelImage={{ imageURL: 'https://www.amherst.edu/system/files/styles/fs_1220_800/private/Psychology_compressed_1920x1280.jpg?itok=FAEv8xqf&__=1458580432' }}panelContent={{ text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam voluptatem harum cupiditate quae aliquid quia optio suscipit ex temporibus adipisci.' }} panelFooter={{ strongText: 'warning: ', text: 'Are You Sure You Want To Do That?' }} />
              </MetaRow>
              <MetaRow>
                <MetaAlert color={'warning'} strongText={'Warning! '} text={'Whoa there calm down'} to='#' />
              </MetaRow>
              <MetaRow>
                <MetaList listItems={listItems} modifiers={['arrows', 'hover']} />
              </MetaRow>
              <MetaColumn size={'sm'} value={'3'}>
                <MetaSideNav menuItems={sideNavItems} />
              </MetaColumn>
            </MetaColumn>
            <MetaTable headerItems={headerItems} bodyItems={rows} tableProperties={['padded', 'bordered', 'hover']} />
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
