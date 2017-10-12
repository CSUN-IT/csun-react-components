import React from 'react';
import MetaRow from '../meta/Row';
import MetaColumn from '../meta/Column';
import MetaContainer from '../meta/Container';
import './sass/_webHeader.scss';

const WebHeader = () => (
  <MetaContainer>
    <div className={'header'}>
      <MetaRow>
        <MetaColumn size={'sm'} value={'7'}>
          <a className={'csun-logo'} href={'http://www.csun.edu'}>
            <img
              src={'http://www.csun.edu/faculty/imgs/csun-logo.png'}
              alt={'California State University, Northridge - CSUN'}
            />
          </a>
          <h2 className="wordmark-secondary">
            <a href="/it" className="wordmark">
              <span className="wordmark--offset">Information Technology</span>
            </a>
          </h2>
        </MetaColumn>
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

export default WebHeader;
