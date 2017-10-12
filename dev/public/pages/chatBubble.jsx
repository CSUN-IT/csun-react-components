import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, MetaChatBubble } from '../../../src';

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
        <MetaColumn size={'sm'} value={'9'}>
          <p>
            <MetaChatBubble
              className={'test'}
              text="Hey I'm Matty!"
              subText="This will be small"
              receiver
            />
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
