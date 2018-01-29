import React from 'react';
import PropTypes from 'prop-types';

import { MetaContainer, MetaColumn, MetaRow } from '../../../src';

const SectionHelper = (props) => {
  const inlineStyle = {
    backgroundColor: '#252525',
  };

  return (
    <section className="section" style={inlineStyle}>
      <MetaContainer>
        <MetaRow>
          <MetaColumn size={'sm'} value={'12'}>
            <h1 className="type--white type--thin type--marginless">{props.title}</h1>
          </MetaColumn>
        </MetaRow>
      </MetaContainer>
    </section>
  );
};

SectionHelper.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionHelper;
