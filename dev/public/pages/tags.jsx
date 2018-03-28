import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, MetaTag } from '../../../src';

const DocTags = () => {
  const code = `import MetaTag from 'csun-react-components';

<MetaTag text={'Warning'} action={'close'} to={'#'} color={'warning'} />
    `;

  const propTypesTitle = '// Prop Types';
  const propTypes = `
  className: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.oneOf([
    'success',
    'warning',
    'danger',
    '',
  ]),
  action: PropTypes.oneOf(['close', '']),
  to: PropTypes.string.isRequired,`;

  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn sizes={['sm']} values={['9']}>
          <p>
            <span>Tag Cloud: </span>
            <MetaTag className={'test'} text={'When'} action={'close'} to={'#'} />
            <MetaTag text={'A'} action={'close'} to={'#'} />
            <MetaTag text={'Problem'} action={'close'} to={'#'} />
            <MetaTag text={'Comes'} action={'close'} to={'#'} />
            <MetaTag text={'Along'} action={'close'} to={'#'} />
            <MetaTag text={'You'} action={'close'} to={'#'} />
            <MetaTag text={'Must'} action={'close'} to={'#'} />
            <MetaTag text={'Whip It'} action={'close'} to={'#'} />
          </p>
          <p>
            <span>Status: </span>
            <MetaTag text={'Approved'} action={'close'} to={'#'} color={'success'} />
            <MetaTag text={'Pending'} action={'close'} to={'#'} color={'warning'} />
            <MetaTag text={'Error'} action={'close'} to={'#'} color={'danger'} />
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

export default DocTags;
