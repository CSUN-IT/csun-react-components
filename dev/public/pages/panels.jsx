import React from 'react';
import { MetaContainer, MetaColumn, MetaTable, MetaRow, MetaPanel } from '../../../src';

const DocPanels = () => {
  const code = `import MetaPanel from 'csun-react-components';\n\n<MetaPanel panelHeader={{ text: 'Panel'}} panelContent={{ text: 'This is a panel w/a header' }}/>
    `;

  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn sizes={['sm']} values={['12']}>
          <h1>Panels</h1>
          <hr />
          <strong>Example Code</strong>
          <pre>
            <code>{code}</code>
          </pre>
        </MetaColumn>
      </MetaRow>
      <MetaRow>
        <MetaColumn sizes={['sm']} values={['4']}>
          <MetaPanel
            panelHeader={{ text: 'Panel' }}
            panelContent={{ text: 'This is a panel w/ a header' }}
          />
        </MetaColumn>
        <MetaColumn sizes={['sm']} values={['4']}>
          <MetaPanel
            panelContent={{ text: 'This is a panel w/ a footer' }}
            panelFooter={{ strongText: 'Pro Tip! ', text: 'Footer Text' }}
          />
        </MetaColumn>
        <MetaColumn sizes={['sm']} values={['4']}>
          <MetaPanel panelContent={{ text: 'This is a basic panel' }} />
        </MetaColumn>
      </MetaRow>
      <MetaRow>
        <strong>Prop Types</strong>
        <MetaTable
          headerCells={['Name', 'Type', 'Required', 'Additional Notes']}
          dataCells={[
            'className',
            'String',
            'No',
            '',
            'panelHeader',
            'Shape',
            'Yes',
            'Contains additional sub prop types.',
            'panelImage',
            'Shape',
            'Yes',
            'Contains additional sub prop types.',
            'panelContent',
            'Shape',
            'Yes',
            'Contains additional sub prop types.',
            'panelFooter',
            'Shape',
            'Yes',
            'Contains additional sub prop types.',
          ]}
        />
        <strong>panelHeader Prop Types</strong>
        <MetaTable
          headerCells={['Name', 'Type', 'Required', 'Additional Notes']}
          dataCells={['text', 'String', 'Yes', '']}
        />

        <strong>panelImage Prop Types</strong>
        <MetaTable
          headerCells={['Name', 'Type', 'Required', 'Additional Notes']}
          dataCells={['imageURL', 'String', 'Yes', '']}
        />

        <strong>panelContent Prop Types</strong>
        <MetaTable
          headerCells={['Name', 'Type', 'Required', 'Additional Notes']}
          dataCells={['text', 'String', 'Yes', '']}
        />

        <strong>panelFooter Prop Types</strong>
        <MetaTable
          headerCells={['Name', 'Type', 'Required', 'Additional Notes']}
          dataCells={['strongText', 'String', 'No', '', 'text', 'String', 'Yes', '']}
        />
      </MetaRow>
    </MetaContainer>
  );
};

export default DocPanels;
