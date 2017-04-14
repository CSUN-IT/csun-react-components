import React, { Component } from 'react';
import {
  Route,
} from 'react-router-dom';
import {
  MetaColumn,
  MetaRow,
  MetaSideNav,
} from '../../../src';
import {
  DocPrimaryNav,
} from '../pages';

class DocLayout extends Component {
   componentWillUpdate() {
    console.log(this);
  }


  render() {
    const match = this.props.match;
    
    const sideNavMenuItems = [
      {
        title: 'Grid System',
        to: `${match.url}/grid`,
        active: false,
      },
      {
        title: 'Typography',
        to: `${match.url}/typography`,
        active: false,
      },
      {
        title: 'Breadcrumbs',
        to: `${match.url}/breadcrumbs`,
        active: false,
      },
      {
        title: 'Nav',
        to: `${match.url}/nav`,
        active: false,
      },
      {
        title: 'Sub Nav',
        to: `${match.url}/subnavigation`,
        active: false,
      },
      {
        title: 'Buttons',
        to: `${match.url}/buttons`,
        active: false,
      },
      {
        title: 'Tags',
        to: `${match.url}/tags`,
        active: false,
      },
      {
        title: 'Panels',
        to: `${match.url}/panels`,
        active: false,
      },
      {
        title: 'Alerts',
        to: `${match.url}/alerts`,
        active: false,
      },
      {
        title: 'Lists',
        to: `${match.url}/lists`,
        active: false,
      },
      {
        title: 'Tables',
        to: `${match.url}/tables`,
        active: false,
      },
      {
        title: 'Forms',
        to: `${match.url}/forms`,
        active: false,
      },
      {
        title: 'Modals',
        to: `${match.url}/modals`,
        active: false,
      },
      {
        title: 'Timeline',
        to: `${match.url}/timeline`,
        active: false,
      },
      {
        title: 'Pagination',
        to: `${match.url}/pagination`,
        active: false,
      },
      {
        title: 'Accordion',
        to: `${match.url}/accordion`,
        active: false,
      },
    ];


    return (
      <MetaRow>
        <MetaColumn size={'sm'} value={'3'}>
          <MetaSideNav menuItems={sideNavMenuItems} />
        </MetaColumn>
        <MetaColumn size={'sm'} value={'9'}>
          <Route path={`${match.url}/nav`} component={DocPrimaryNav} />
        </MetaColumn>
      </MetaRow>
    );
  }

}

export default DocLayout;
