import React from 'react';
import { MetaContainer, MetaColumn, MetaTable, MetaRow, MetaList } from '../../../src';

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
        <MetaColumn sizes={['sm']} values={['12']}>
          <h1>Lists</h1>
          <hr />
        </MetaColumn>
        <MetaColumn sizes={['sm']} values={['9']}>
          <MetaColumn sizes={['sm']} values={['4']}>
            <MetaList className={'test'} listItems={listItems} />
          </MetaColumn>
          <MetaColumn sizes={['sm']} values={['4']}>
            <MetaList listItems={listItems} modifiers={['arrows', 'hover']} />
          </MetaColumn>
          <MetaColumn sizes={['sm']} values={['4']}>
            <MetaList listItems={listItems} modifiers={['underlined']} />
          </MetaColumn>
          <br />
          <strong>Example Code</strong>
          <pre>
            <code>
              {code}
              <div className="type--dark-gray">
                <strong>{propTypesTitle}</strong>
                {propTypes}
              </div>
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
              'listItems',
              'Array/Shape',
              'Yes',
              'Contains additional sub prop types.',
              'modifiers',
              'Array/oneOf',
              'No',
              'arrows, hover, underlined',
            ]}
          />
          <strong>listItems Prop Types</strong>
          <MetaTable
            headerCells={['Name', 'Type', 'Required', 'Additional Notes']}
            dataCells={['text', 'String', 'Yes', '', 'to', 'String', 'Yes', '']}
          />
        </MetaColumn>
      </MetaRow>
    </MetaContainer>
  );
};

export default DocLists;
