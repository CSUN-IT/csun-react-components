import React, { Component } from 'react';
import {
  MetaContainer,
  MetaColumn,
  MetaRow,
  MetaButton,
  MetaForm,
} from '../../../src';

class DocForm extends Component {
  render() {
    const code = `import MetaButton from 'csun-react-components';

<MetaButton text={'Button'} color={'default'} size={''} />
    `;

    const propTypesTitle = '// Prop Types';
    const propTypes = `
  text: React.PropTypes.string.isRequired,
  color: React.PropTypes.oneOf([
    'default',
    'primary',
    'success',
  ]).isRequired,
  size: React.PropTypes.oneOf([
    'sm',
    'lg',
    '',
  ]),
  btnStyle: React.PropTypes.oneOf([
    'default-outline',
    'primary-outline',
    'success-outline',
    '',
  ]),`;

    return (
      <MetaContainer>
        <MetaRow>
          <MetaForm />
        </MetaRow>
      </MetaContainer>
    );
  }
}

export default DocForm;
