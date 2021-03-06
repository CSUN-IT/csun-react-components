import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MetaContainer, MetaColumn, MetaRow, MetaSideNav } from '../../../src';
import {
  DocPrimaryNav,
  DocBreadcrumbs,
  DocAlerts,
  DocButtons,
  DocLists,
  DocPanels,
  DocSideNav,
  DocSubNav,
  DocForms,
  DocTags,
  DocGrid,
  DocAccordion,
  DocChatBubble,
  DocWebHeader,
  DocWebSidebar,
  DocWebSlider,
  DocTables,
  DocCards,
  DocCardList,
  DocButtonLink,
} from '../pages';
import SectionHelper from '../components/SectionHelper';

const DocLayout = (props) => {
  const match = props.match;

  const sideNavMenuItems = [
    {
      title: 'Accordion',
      to: `${match.url}/accordion`,
      active: false,
    },
    {
      title: 'Alerts',
      to: `${match.url}/alerts`,
      active: false,
    },
    {
      title: 'Breadcrumbs',
      to: `${match.url}/breadcrumbs`,
      active: false,
    },
    {
      title: 'Button',
      to: `${match.url}/button`,
      active: false,
    },
    {
      title: 'Button Links',
      to: `${match.url}/buttonLink`,
      active: false,
    },
    {
      title: 'ChatBubble',
      to: `${match.url}/chatBubbles`,
      active: false,
    },
    {
      title: 'Forms',
      to: `${match.url}/forms`,
      active: false,
    },
    {
      title: 'Grid System',
      to: `${match.url}/grid`,
      active: false,
    },
    {
      title: 'Lists',
      to: `${match.url}/lists`,
      active: false,
    },
    {
      title: 'Modals',
      to: `${match.url}/modals`,
      active: false,
    },
    {
      title: 'Nav',
      to: `${match.url}/nav`,
      active: false,
    },
    {
      title: 'Pagination',
      to: `${match.url}/pagination`,
      active: false,
    },
    {
      title: 'Panels',
      to: `${match.url}/panels`,
      active: false,
    },
    {
      title: 'Side Nav',
      to: `${match.url}/sidenav`,
      active: false,
    },
    {
      title: 'Sub Nav',
      to: `${match.url}/subnavigation`,
      active: false,
    },
    {
      title: 'Tables',
      to: `${match.url}/tables`,
      active: false,
    },
    {
      title: 'Tags',
      to: `${match.url}/tags`,
      active: false,
    },
    {
      title: 'Timeline',
      to: `${match.url}/timeline`,
      active: false,
    },
    {
      title: 'Typography',
      to: `${match.url}/typography`,
      active: false,
    },
    {
      title: 'Web Cardlist',
      to: `${match.url}/webcardlist`,
      active: false,
    },
    {
      title: 'Web Card',
      to: `${match.url}/webcard`,
      active: false,
    },
    {
      title: 'Web Header',
      to: `${match.url}/webheader`,
      active: false,
    },
    {
      title: 'Web Sidebar',
      to: `${match.url}/websidebar`,
      active: false,
    },
    {
      title: 'Web Slider',
      to: `${match.url}/webslider`,
      active: false,
    },
  ];

  return (
    <div>
      <SectionHelper title={'Documentation'} />
      <div className={'section'}>
        <MetaContainer>
          <MetaRow>
            <MetaColumn sizes={['sm']} values={['3']}>
              <MetaSideNav menuItems={sideNavMenuItems} />
            </MetaColumn>
            <MetaColumn sizes={['sm']} values={['9']}>
              <Route path={`${match.url}/nav`} component={DocPrimaryNav} />
              <Route path={`${match.url}/breadcrumbs`} component={DocBreadcrumbs} />
              <Route path={`${match.url}/alerts`} component={DocAlerts} />
              <Route path={`${match.url}/button`} component={DocButtons} />
              <Route path={`${match.url}/buttonLink`} component={DocButtonLink} />
              <Route path={`${match.url}/lists`} component={DocLists} />
              <Route path={`${match.url}/panels`} component={DocPanels} />
              <Route path={`${match.url}/sidenav`} component={DocSideNav} />
              <Route path={`${match.url}/subnavigation`} component={DocSubNav} />
              <Route path={`${match.url}/tags`} component={DocTags} />
              <Route path={`${match.url}/grid`} component={DocGrid} />
              <Route path={`${match.url}/tables`} component={DocTables} />
              <Route path={`${match.url}/forms`} component={DocForms} />
              <Route path={`${match.url}/accordion`} component={DocAccordion} />
              <Route path={`${match.url}/chatBubbles`} component={DocChatBubble} />
              <Route path={`${match.url}/webheader`} component={DocWebHeader} />
              <Route path={`${match.url}/websidebar`} component={DocWebSidebar} />
              <Route path={`${match.url}/webcard`} component={DocCards} />
              <Route path={`${match.url}/webslider`} component={DocWebSlider} />
              <Route path={`${match.url}/webcardlist`} component={DocCardList} />
            </MetaColumn>
          </MetaRow>
        </MetaContainer>
      </div>
    </div>
  );
};

DocLayout.propTypes = {
  match: PropTypes.shape({ url: PropTypes.string }).isRequired,
};

export default DocLayout;
