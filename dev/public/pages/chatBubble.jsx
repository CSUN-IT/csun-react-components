import React from 'react';
import { MetaContainer, MetaColumn, MetaTable, MetaRow, MetaChatBubble } from '../../../src';

const DocChatBubble = () => {
  const code = `import MetaChatBubble from 'csun-react-components';

    
<MetaChatBubble text="Hey I'm Matty!" subText="This will be small" receiver />
<MetaChatBubble text="Hey I'm sending you this" subText="This will be small too." receiver={false} />`;

  const propTypesTitle = `// Prop Types
      MetaChatBubble.propTypes = {
        className: PropTypes.string,
        text: PropTypes.string.isRequired,
        subText: PropTypes.string,
        receiver: PropTypes.bool.isRequired,
      };`;
  const propTypes = '';

  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn sizes={['sm']} values={['9']}>
          <div>
            <MetaChatBubble
              className={'test'}
              text="Hey I'm Matty!\nHow can I help you"
              subText="This will be small"
              receiver
            />
            <MetaChatBubble
              text="Hey I'm sending you this"
              subText="This will be small too."
              receiver={false}
            />
          </div>
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
              'Text',
              'String',
              'Yes',
              '',
              'subText',
              'String',
              'No',
              '',
              'receiver',
              'Boolean',
              'Yes',
              '',
            ]}
          />
        </MetaColumn>
      </MetaRow>
    </MetaContainer>
  );
};

export default DocChatBubble;
