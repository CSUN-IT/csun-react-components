import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, WebSidebar } from '../../../src';

const DocWebSidebar = () => {
  const code = `
    import WebSidebar from 'csun-react-components';
    
    <WebSidebar>
    <h3> Test Header </h3>
    <h4> Test Title </h4>
    <p> Example paragraph for WebSidebar component. </p>
  </WebSidebar>
    
  );
  
    `;

  const propTypesTitle = '// Prop Types';
  const propTypes = `
    children: PropTypes.node.isRequired,
 `;

  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn size={'sm'} value={'8'}>
          <WebSidebar>
            <h3> Test Header </h3>
            <h4> Test Title </h4>
            <p> Example paragraph for WebSidebar component. </p>
          </WebSidebar>
        </MetaColumn>
        <MetaColumn size={'sm'} value={'9'}>
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

export default DocWebSidebar;
