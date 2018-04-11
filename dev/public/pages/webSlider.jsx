import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, WebSlider } from '../../../src';

const DocWebSlider = () => {
  const cards = [
    {
      text: 'Slide 0',
    },
    {
      text: 'Slide 1',
    },
    {
      text: 'Slide 2',
    },
  ];

  const code = `
    import WebSlider from 'csun-react-components';
    
      const cards = [
        {
          text: 'Slide 0',
        },
        {
          text: 'Slide 1',
        },
        {
          text: 'Slide 2',
        },
      ];
      <WebSlider cards={cards} />`;

  const propTypesTitle = '\n// Prop Types';
  const propTypes = `
    text: PropTypes.node.isRequired,
 `;

  return (
    <MetaContainer>
      <MetaRow className={'flex'}>
        <MetaColumn sizes={['sm']} values={['9']}>
          <WebSlider cards={cards} />
          <br />
          <pre>
            <code>
              {code}
              <div className="type--dark-gray">
                <strong>{propTypesTitle}</strong>
                {propTypes}
              </div>
            </code>
          </pre>
        </MetaColumn>
      </MetaRow>
    </MetaContainer>
  );
};

export default DocWebSlider;
