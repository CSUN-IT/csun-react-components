import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, WebSlider, WebCard, MetaTable } from '../../../src';

const DocWebSlider = () => {

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

  const code = `
    import WebSlider from 'csun-react-components';
    
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
      <WebSlider>
        <WebCard
          title={'Oviatt Library'}
          content={'This was a triumph. I\'m making a note here, huge success. It\'s hard to overstate my satisfaction.'}
          img={'https://upload.wikimedia.org/wikipedia/commons/c/c7/OviattLibrary.jpg'}
          linkTo={'https://www.csun.edu/'}
          buttonArray={buttons}
        />
        <WebCard
          title={'Dormitories'}
          content={'Education is not just about going to school and getting a degree. It\'s about widening your knowledge and absorbing the truth about life.'}
          img={'http://busecon.csun.edu/sites/default/files/Building-16-cropped.jpg'}
          linkTo={'https://www.csun.edu/'}
          buttonArray={buttons}
        />
        <WebCard
          buttonArray={buttons}
        />
      </WebSlider>`;

  const propTypesTitle = '\n// Prop Types';
  const propTypes = `
    text: PropTypes.node.isRequired,
 `;

  return (
    <MetaContainer>
      <MetaRow className={'flex'}>
        <MetaColumn sizes={['sm']} values={['9']}>
          <WebSlider>
            <WebCard
              title={'Oviatt Library'}
              content={'This was a triumph. I\'m making a note here, huge success. It\'s hard to overstate my satisfaction.'}
              img={'https://upload.wikimedia.org/wikipedia/commons/c/c7/OviattLibrary.jpg'}
              linkTo={'https://www.csun.edu/'}
              buttonArray={buttons}
            />
            <WebCard
              title={'Dormitories'}
              content={'Education is not just about going to school and getting a degree. It\'s about widening your knowledge and absorbing the truth about life.'}
              img={'http://busecon.csun.edu/sites/default/files/Building-16-cropped.jpg'}
              linkTo={'https://www.csun.edu/'}
              buttonArray={buttons}
            />
            <WebCard
              buttonArray={buttons}
            />
          </WebSlider>
          <br />
          <strong>Example Code</strong>
          <pre>
            <code>
              {code}
            </code>
          </pre>
          <strong>Prop Types</strong>
          <MetaTable
            headerCells={['Name', 'Type', 'Required', 'Additional Notes']}
            dataCells={[
              'cards',
              'Array/Shape',
              'Yes',
              'Contains additional sub prop types.',
            ]}
          />
          <strong>Cards Prop Types</strong>
          <MetaTable
            headerCells={['Name', 'Type', 'Required', 'Additional Notes']}
            dataCells={[
              'className',
              'String',
              'No',
              '',
              'title',
              'String',
              'No',
              '',
              'content',
              'String',
              'No',
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
              'Contains an array of objects.',
            ]}
          />
        </MetaColumn>
      </MetaRow>
    </MetaContainer>
  );
};

export default DocWebSlider;
