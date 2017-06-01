import React, { Component } from 'react';
import {
  Route,
} from 'react-router-dom';
import {
  MetaContainer,
  MetaColumn,
  MetaRow,
  MetaSideNav,
} from '../../../src';
import {
  DocPrimaryNav,
  DocBreadcrumbs,
  DocAlerts,
  DocButtons,
  DocLists,
  DocPanels,
  DocSideNav,
  DocSubNav,
  DocTags,
  DocGrid,
  DocAccordion,
  DocTables,
} from '../pages';
import SectionHelper from '../components/SectionHelper';

class DocLayout extends Component {

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
        title: 'Side Nav',
        to: `${match.url}/sidenav`,
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
      <div>
        <SectionHelper title={'Documentation'} />
        <div className={'section'}>
          <MetaContainer>
            <MetaRow>
              <MetaColumn size={'sm'} value={'3'}>
                <MetaSideNav menuItems={sideNavMenuItems} />
              </MetaColumn>
              <Route path={`${match.url}/nav`} component={DocPrimaryNav} />
              <Route path={`${match.url}/breadcrumbs`} component={DocBreadcrumbs} />
              <Route path={`${match.url}/alerts`} component={DocAlerts} />
              <Route path={`${match.url}/buttons`} component={DocButtons} />
              <Route path={`${match.url}/lists`} component={DocLists} />
              <Route path={`${match.url}/panels`} component={DocPanels} />
              <Route path={`${match.url}/tables`} component={DocTables} />
              <Route path={`${match.url}/sidenav`} component={DocSideNav} />
              <Route path={`${match.url}/subnavigation`} component={DocSubNav} />
              <Route path={`${match.url}/tags`} component={DocTags} />
              <Route path={`${match.url}/grid`} component={DocGrid} />
              <Route path={`${match.url}/accordion`} component={DocAccordion} />
            </MetaRow>
          </MetaContainer>
        </div>
      </div>
    );
  }

}

export default DocLayout;
