import React from 'react';
import { MetaContainer, MetaColumn, MetaTable, MetaRow, MetaAlert } from '../../../src';

const DocAlerts = () => {
  const code = `import MetaAlert from 'csun-react-components';

<MetaAlert color={'info'} strongText={'Pro Tip'} text={'Color is info'} onClick={ () => { console.log('hello world'); }}/>
    `;

  const propTypesTitle = '// Prop Types';
  const propTypes = `
  color: PropTypes.oneOf([
    'info',
    'success',
    'warning',
    'danger',
  ]),
  className: PropTypes.string,
  strongText: PropTypes.string,
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,`;

  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn sizes={['sm']} values={['9']}>
          <MetaAlert strongText={'Pro Tip:'} text={'No color is default and this grey'} />
          <MetaAlert
            className={'test classTest'}
            color={'info'}
            strongText={'Pro Tip:'}
            text={'Color is info'}
          />
          <MetaAlert color={'success'} strongText={'Pro Tip:'} text={'Color is success'} />
          <MetaAlert color={'warning'} strongText={'Pro Tip:'} text={'Color is warning'} />
          <MetaAlert
            color={'danger'}
            strongText={'Pro Tip:'}
            text={'Color is danger'}
            onClick={() => {
              console.log('Hello world.');
            }}
          />
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
              'color',
              'oneOf',
              'No',
              'info, success, warning, danger',
              'className',
              'String',
              'No',
              '',
              'strongText',
              'String',
              'No',
              '',
              'text',
              'String',
              'Yes',
              '',
              'to',
              'String',
              'No',
              '',
              'onClick',
              'function',
              'No',
              '',
            ]}
          />
        </MetaColumn>
      </MetaRow>
    </MetaContainer>
  );
};

export default DocAlerts;
