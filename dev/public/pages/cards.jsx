import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, WebCard } from '../../../src';

const buttons = [
  {
    title: 'Google',
    link: 'https://www.google.com',
  },
  {
    title: 'Reddit',
    link: 'https://www.reddit.com',
  },
  {
    title: 'CSUN',
    link: 'https://www.csun.edu',
  },
];

const DocCards = () => {
  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn sizes={['sm']} values={['12']}>
          <h1>Card</h1>
          <hr />
        </MetaColumn>
        <MetaColumn sizes={['sm']} values={['12']}>
          <WebCard
            title={'Title'}
            content={'This was a triumph. I\'m making a note here, huge success. It\'s hard to overstate my satisfaction.'}
            img={'https://upload.wikimedia.org/wikipedia/commons/c/c7/OviattLibrary.jpg'}
            linkTo={'https://www.csun.edu/'}
            buttonArray={buttons}
          />
        </MetaColumn>
      </MetaRow>
    </MetaContainer>
  );
};

export default DocCards;
