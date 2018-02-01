import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, MetaPanel } from '../../../src';

const DocPanels = () => {
  const code = `import MetaPanel from 'csun-react-components';\n\n<MetaPanel panelHeader={{ text: 'Panel'}} panelContent={{ text: 'This is a panel w/a header' }}/>
    `;

  const propTypesTitle = '// Panel Prop Types';
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
        <MetaColumn sizes={['sm']} values={['12']}>
          <h1>Panels</h1>
          <hr />
          <pre>
            <code>
              {code}
            </code>
            <div>
              <strong>{propTypesTitle}</strong>
              {propTypes}
            </div>
          </pre>
        </MetaColumn>
      </MetaRow>
      <MetaRow>
        <MetaColumn sizes={['sm']} values={['4']}>
          <MetaPanel panelHeader={{ text: 'Panel' }} panelContent={{ text: 'This is a panel w/ a header' }} />
        </MetaColumn>
        <MetaColumn sizes={['sm']} values={['4']}>
          <MetaPanel panelContent={{ text: 'This is a panel w/ a footer' }} panelFooter={{ strongText: 'Pro Tip! ', text: 'Footer Text' }} />
        </MetaColumn>
        <MetaColumn sizes={['sm']} values={['4']}>
          <MetaPanel panelContent={{ text: 'This is a basic panel' }} />
        </MetaColumn>
      </MetaRow>
    </MetaContainer>
  );
};

export default DocPanels;
