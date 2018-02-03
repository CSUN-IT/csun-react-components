import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, MetaSideNav } from '../../../src';

const DocMain = () => {
  return (
    <MetaContainer className="mainContainer">
      <MetaRow className="centerRow">
        <MetaColumn sizes={['sm']} values={['12']} className="intro">
          Welcome to CSUN's Metaphor React Components! These components were created
          to make your life easier by having premade layouts for your everday web design needs!
        </MetaColumn>
      </MetaRow>
      <MetaRow className="centerRow">
        <MetaSideNav className="btn btn-default" menuItems={[{ title: 'Get Started', to: '/docs' }]} />
      </MetaRow>
    </MetaContainer>
  );
};

export default DocMain;
