import React, { Component } from 'react';

import {
  MetaContainer,
  MetaColumn,
  MetaRow,
} from '../../../src';

class SectionHelper extends Component {

  render() {
    const inlineStyle = {
      backgroundColor: '#252525',
    };

    return (
      <section className="section" style={inlineStyle}>
        <MetaContainer>
          <MetaRow>
            <MetaColumn size={'sm'} value={'12'}>
              <h1 className="type--white type--thin type--marginless">{ this.props.title }</h1>
            </MetaColumn>
          </MetaRow>
        </MetaContainer>
      </section>
    );
  }
}

SectionHelper.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default SectionHelper;
