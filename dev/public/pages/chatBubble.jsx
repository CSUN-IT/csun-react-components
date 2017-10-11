import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, MetaChatBubble } from '../../../src';

const DocChatBubble = () => {
  const code = `import MetaChatBubble from 'csun-react-components';

    
<MetaChatBubble text="Hey I'm Matty!" subText="This will be small" receiver />
<MetaChatBubble text="Hey I'm sending you this" subText="This will be small too." receiver={false} />`;

  const propTypesTitle = `// Prop Types
    MetaChatBubble.defaultProps = {
        text: '',
        subText: '',
        receiver: true,
      };
      
      MetaChatBubble.propTypes = {
        text: React.PropTypes.string.isRequired,
        subText: React.PropTypes.string,
        receiver: React.PropTypes.bool.isRequired,
      };`;
  const propTypes = '';

  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn size={'sm'} value={'9'}>
          <p>
            <MetaChatBubble text="Hey I'm Matty!" subText="This will be small" receiver />
            <MetaChatBubble
              text="Hey I'm sending you this"
              subText="This will be small too."
              receiver={false}
            />
          </p>
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

export default DocChatBubble;
