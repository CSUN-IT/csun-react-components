import React from 'react';
import {
  MetaContainer,
  MetaColumn,
  MetaRow,
  QuickResponseButton,
} from '../../../src';

const DocQuickResponseButtons = () => {
  const code = `import QuickResponseButton from 'csun-react-components';

<QuickResponseButton type="text" value={''} text={'Button'} color={'default'} size={''} disabled={'false'} action={function}/>`;

  const propTypesTitle = '// Prop Types';
  const propTypes = `
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    'default',
    'primary',
    'success',
  ]).isRequired,
  size: PropTypes.oneOf([
    'lg',
    'med',
    'sm',
    'mini',
    '',
  ]),
  disabled: PropTypes.oneOf([
    'true',
    'false',
    '',
  ]),
  action: PropTypes.func.isRequired,
  btnStyle: PropTypes.oneOf([
    'default-outline',
    'primary-outline',
    'success-outline',
    '',
  ]),`;

  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn size={'sm'} value={'9'}>
          <p>
            <QuickResponseButton text={'Yes'} color={'default'} size={'lg'} action={() => console.log('Yes')} />
            <QuickResponseButton text={'No'} color={'primary'} size={'med'} disabled={'false'} action={() => console.log('No')} />
            <QuickResponseButton text={'Maybe'} color={'success'} size={'sm'} disabled={''} action={() => console.log('Maybe')} />
            <QuickResponseButton text={'Disabled'} color={'default'} size={'mini'} disabled={'true'} action={() => console.log('Disabled')} />
          </p>
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
};

export default DocQuickResponseButtons;
