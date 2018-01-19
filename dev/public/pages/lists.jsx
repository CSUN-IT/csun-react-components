import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, MetaList } from '../../../src';

const DocLists = () => {
  const listItems = [
    {
      text: 'Side Nav Link',
      to: '#',
    },
    {
      text: 'Side Nav Link',
      to: '#',
    },
    {
      text: 'Side Nav Link',
      to: '#',
    },
  ];
  const code = `import MetaList from 'csun-react-components';

const listItems = [
  {
    text: 'Side Nav Link',
    to: '#',
  },
  {
    text: 'Side Nav Link',
    to: '#',
  },
  {
    text: 'Side Nav Link',
    to: '#',
  },
];

<MetaList listItems={listItems} modifiers={['arrows']} />
    `;

  const propTypesTitle = '// Prop Types';
  const propTypes = `
  classNames: PropTypes.string,
  listItems: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  })),
  modifiers: PropTypes.arrayOf(PropTypes.oneOf([
    'arrows',
    'hover',
    'underlined',
  ])),`;

  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn size={'sm'} value={'12'}>
          <h1>Lists</h1>
          <hr />
        </MetaColumn>
        <MetaColumn size={'sm'} value={'9'}>
          <MetaColumn size={'sm'} value={'4'}>
            <MetaList className={'test'} listItems={listItems} />
          </MetaColumn>
          <MetaColumn size={'sm'} value={'4'}>
            <MetaList listItems={listItems} modifiers={['arrows']} />
          </MetaColumn>
          <MetaColumn size={'sm'} value={'4'}>
            <MetaList listItems={listItems} modifiers={['underlined']} />
          </MetaColumn>
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

export default DocLists;
