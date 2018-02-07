import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, MetaButtonLink } from '../../../src';

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
        <MetaButtonLink className={'default'} color={'default'} text={'Get Started'} to={'/docs'} />
      </MetaRow>
    </MetaContainer>
  );
};

export default DocMain;
