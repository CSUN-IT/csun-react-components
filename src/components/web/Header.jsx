import React from 'react';
import PropTypes from 'prop-types';
import MetaRow from '../meta/Row';
import MetaContainer from '../meta/Container';
import './sass/_webHeader.scss';

const WebHeader = (props) => {
  const secondaryWordmark = props.secondaryWordmark ? (
    <a href={props.secondaryWordmark.to} className="wordmark secondary-wordmark">
      <span className="wordmark--offset">{props.secondaryWordmark.title}</span>
    </a>
  ) : null;

  const tertiaryWordmark = props.tertiaryWordmark ? (
    <a href={props.tertiaryWordmark.to} className="wordmark tertiary-wordmark">
      <span className="wordmark--offset">{props.tertiaryWordmark.title}</span>
    </a>
  ) : null;

  return (
    <MetaContainer>
      <div className={'header'}>
        <MetaRow>
          <a className={'csun-logo'} href={'http://www.csun.edu'}>
            <span className="sr-only">California State University, Northridge (CSUN)</span>
          </a>
          {secondaryWordmark}
          {tertiaryWordmark}
          <ul className={'list-inline mini-nav pull-right'}>
            <li>
              <a href={'http://www.csun.edu/universaldesigncenter'}>Accessibility</a>
            </li>|
            <li>
              <a
                href={
                  'https://mynorthridge.csun.edu/psc/PANRPRD/EMPLOYEE/EMPL/c/NRPA_CSUN_APPS.NR_PEOPLESRCH_CMP.GBL'
                }
              >
                Directory
              </a>
            </li>|
            <li>
              <a href={'http://www.csun.edu/calendar'}>Calendar</a>
            </li>|
            <li>
              <a href={'http://www.csun.edu/atoz/'}>A to Z</a>
            </li>|
            <li>
              <a href={'http://www.csun.edu/it/webmail'}>Webmail</a>
            </li>
          </ul>
        </MetaRow>
      </div>
    </MetaContainer>
  );
};

WebHeader.defaultProps = {
  secondaryWordmark: null,
  tertiaryWordmark: null,
};

WebHeader.propTypes = {
  secondaryWordmark: PropTypes.shape({
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }),
  tertiaryWordmark: PropTypes.shape({
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }),
};

export default WebHeader;
