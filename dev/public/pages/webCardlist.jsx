import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, WebCardList, WebCard } from '../../../src';

const buttonsWebsites = [
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

const buttonsSocial = [
  {
    title: 'Facebook',
    link: 'https://www.facebook.com/calstatenorthridge',
  },
  {
    title: 'Twitter',
    link: 'https://www.twitter.com/csunorthridge',
  },
  {
    title: 'Instagram',
    link: 'https://www.instagram.edu/csun_edu',
  },
];

const DocCardList = () => {
  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn sizes={['sm']} values={['12']}>
          <h1>Cards</h1>
          <hr />
        </MetaColumn>
        <MetaColumn sizes={['sm']} values={['12']}>
          <WebCardList>
            <WebCard title={'Title'} content={'This was a triumph. I\'m making a note here, huge success. It\'s hard to overstate my satisfaction.'} img={'https://upload.wikimedia.org/wikipedia/commons/c/c7/OviattLibrary.jpg'} linkTo={'https://www.csun.edu/'} buttonArray={buttonsWebsites} />
            <WebCard title={'New Title'} content={'The cake is a lie.'} img={''} linkTo={'https://www.csun.edu/'} />
            <WebCard title={'Another Title'} content={'This was a triumph. I\'m making a note here, huge success. It\'s hard to overstate my satisfaction.'} img={'https://upload.wikimedia.org/wikipedia/commons/c/c7/OviattLibrary.jpg'} linkTo={'https://www.csun.edu/'} buttonArray={buttonsSocial} />
          </WebCardList>
        </MetaColumn>
      </MetaRow>
    </MetaContainer>
  );
};

export default DocCardList;
