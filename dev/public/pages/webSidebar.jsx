import React from 'react';
import { MetaContainer, MetaColumn, MetaTable, MetaRow, WebSidebar } from '../../../src';

const DocWebSidebar = () => {
  const code = `
    import WebSidebar from 'csun-react-components';
    
    <WebSidebar>
    <h3> Test Header </h3>
    <h4> Test Title </h4>
    <p> Example paragraph for WebSidebar component. </p>
  </WebSidebar>`;

  return (
    <MetaContainer>
      <MetaRow className={'flex'}>
        <MetaColumn className={'flex'} sizes={['md', 'xl']} values={['12', '3']}>
          <WebSidebar>
            <h3> Test Header </h3>
            <h4> Test Title </h4>
            <p> Example paragraph for WebSidebar component. </p>
          </WebSidebar>
        </MetaColumn>
        <MetaColumn className={'flex'} sizes={['md', 'xl']} values={['12', '6']}>
          <p>Testing with lots of text to see if it makes a difference in the positioning.</p>
        </MetaColumn>
        <MetaColumn className={'flex'} sizes={['md', 'xl']} values={['12', '3']}>
          <WebSidebar>
            <h3> Test Header </h3>
            <h4> Test Title </h4>
            <p> Example paragraph for WebSidebar component. </p>
            <p> Here is more example text to show how it can be presented. </p>
          </WebSidebar>
        </MetaColumn>
      </MetaRow>
      <MetaRow>
        <MetaColumn sizes={['sm']} values={['9']}>
          <br />
          <strong>Example Code</strong>
          <pre>
            <code>{code}</code>
          </pre>
          <strong>Prop Types</strong>
          <MetaTable
            headerCells={['Name', 'Type', 'Required', 'Additional Notes']}
            dataCells={['children', 'any', 'Yes', 'Requires having child elements/data within it.']}
          />
        </MetaColumn>
      </MetaRow>
    </MetaContainer>
  );
};

export default DocWebSidebar;
