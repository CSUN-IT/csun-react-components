import React, { Component } from 'react';
import {
  MetaContainer,
  MetaColumn,
  MetaRow,
  MetaPrimaryNav,
} from '../../../src';

class DocPrimaryNav extends Component {
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

    return (
      <MetaContainer>
        <MetaRow>
          <MetaColumn size={'sm'} value={'9'}>
            <MetaPrimaryNav menuItems={menuItems} navColor={'cream'} />
            <MetaPrimaryNav menuItems={menuItems} />
            <MetaPrimaryNav menuItems={menuItems} navColor={'black'} />
          </MetaColumn>
        </MetaRow>
      </MetaContainer>
    );
  }
}

export default DocPrimaryNav;
