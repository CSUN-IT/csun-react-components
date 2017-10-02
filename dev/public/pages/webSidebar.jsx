import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, WebSidebar } from '../../../src';

const DocWebSidebar = () => {
  const code = `
    import WebSidebar from 'csun-react-components';
    
    <WebSidebar>
    <h3> Test Header </h3>
    <h4> Test Title </h4>
    <p> Example paragraph for WebSidebar component. </p>
  </WebSidebar>`;

  const propTypesTitle = '// Prop Types';
  const propTypes = `
    children: PropTypes.node.isRequired,
 `;

  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn size={'sm'} value={'4'}>
          <WebSidebar>
            <h3> Test Header </h3>
            <h4> Test Title </h4>
            <p> Example paragraph for WebSidebar component. </p>
          </WebSidebar>
        </MetaColumn>
        <MetaColumn size={'sm'} value={'1'}>
          <p>Testing with lots of text to see if it makes a difference in the positioning.</p>
        </MetaColumn>
        <MetaColumn size={'sm'} value={'4'}>
          <WebSidebar>
            <h3> Test Header </h3>
            <h4> Test Title </h4>
            <p> Example paragraph for WebSidebar component. </p>
            <p> Here is more example text to show how it can be presented. </p>
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
