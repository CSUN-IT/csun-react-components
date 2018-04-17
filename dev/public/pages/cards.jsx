import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, WebCard, MetaTable } from '../../../src';

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

const importCode = 'import { WebCards } from csun-react-components\n';
const code = `<WebCard
  title={'Title'}
  content={'This was a triumph. I\'m making a note here, huge success. It\'s hard to overstate my satisfaction.'}
  img={'https://upload.wikimedia.org/wikipedia/commons/c/c7/OviattLibrary.jpg'} 
  linkTo={'https://www.csun.edu/'}
  buttonArray={buttons}
/>`;

const DocCards = () => {
  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn sizes={['sm']} values={['12']}>
          <h1>Cards</h1>
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
      <br />
      <strong>Example Code</strong>
      <pre>
        <code>
          {importCode}
          <br />
          {code}
        </code>
      </pre>
      <strong>Prop Types</strong>
      <MetaTable
        headerCells={['Name', 'Type', 'Required', 'Additional Notes']}
        dataCells={[
          'className',
          'String',
          'No',
          '',
          'title',
          'String',
          'Yes',
          '',
          'content',
          'String',
          'Yes',
          '',
          'img',
          'String',
          'No',
          '',
          'linkTo',
          'String',
          'No',
          '',
          'buttonArray',
          'Array',
          'No',
          'Contains array of objects',
        ]}
      />
    </MetaContainer>
  );
};

export default DocCards;
