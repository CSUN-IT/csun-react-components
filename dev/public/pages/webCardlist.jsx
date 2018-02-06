import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, WebCardList, WebCard } from '../../../src';

const DocCardList = (props) => {
  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn sizes={['sm']} values={['12']}>
          <h1>Cards</h1>
          <hr />
        </MetaColumn>
        <MetaColumn sizes={['sm']} values={['12']}>
          <WebCardList>
            <WebCard title={'Title'} content={'This here is content'} img={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png'} linkTo={'https://www.google.com'} />
          </WebCardList>
        </MetaColumn>
      </MetaRow>
    </MetaContainer>
  );
};

export default DocCardList;
