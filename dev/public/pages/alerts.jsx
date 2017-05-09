import React, { Component } from 'react';
import {
  MetaContainer,
  MetaColumn,
  MetaRow,
  MetaAlert,
} from '../../../src';

class DocAlerts extends Component {
  render() {
    const code = `import MetaAlert from 'csun-react-components';

<MetaAlert color={'info'} strongText={'Pro Tip'} text={'Color is info'} />
    `;

    const propTypesTitle = '// Prop Types';
    const propTypes = `
  color: React.PropTypes.oneOf([
    'info',
    'success',
    'warning',
    'danger',
  ]),
  strongText: React.PropTypes.string,
  text: React.PropTypes.string.isRequired,
  to: React.PropTypes.string,`;

    return (
      <MetaContainer>
        <MetaRow>
          <MetaColumn size={'sm'} value={'9'}>
            <MetaAlert strongText={'Pro Tip:'} text={'No color is default and this grey'} />
            <MetaAlert color={'info'} strongText={'Pro Tip:'} text={'Color is info'} />
            <MetaAlert color={'success'} strongText={'Pro Tip:'} text={'Color is success'} />
            <MetaAlert color={'warning'} strongText={'Pro Tip:'} text={'Color is warning'} />
            <MetaAlert color={'danger'} strongText={'Pro Tip:'} text={'Color is danger'} />
            <br />
            <pre>
              <code>
                { code }
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
  }
}

export default DocAlerts;