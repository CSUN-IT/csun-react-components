import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, MetaPanel } from '../../../src';

const DocPanels = () => {
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
  className: PropTypes.string,
  panelHeader: PropTypes.shape({
    text: PropTypes.string.isRequired,
  }),
  panelImage: PropTypes.shape({
    imageURL: PropTypes.string.isRequired,
  }),
  panelContent: PropTypes.shape({
    text: PropTypes.string.isRequired,
  }).isRequired,
  panelFooter: PropTypes.shape({
    strongText: PropTypes.string,
    text: PropTypes.string.isRequired,
  }),`;

  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn size={'sm'} value={'9'}>
          <MetaPanel className={'test'} panelContent={{ text: 'This is a basic panel' }} />
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

export default DocPanels;
