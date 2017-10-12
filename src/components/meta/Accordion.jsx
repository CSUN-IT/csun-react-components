import React from 'react';
import { generate as shortIdGenerate } from 'shortid';
import PropTypes from 'prop-types';

const MetaAccordion = (props) => {
  const AccordionBody = props.bodyItems.map(Item => (
    <div key={shortIdGenerate()}>
      <dt className="accordion__header">{Item.heading}</dt>
      <dd className="accordion__content">
        <p>{Item.body}</p>
      </dd>
    </div>
  ));

  return <dl className={`accordion ${props.className}`}>{AccordionBody}</dl>;
};

MetaAccordion.defaultProps = {
  className: '',
};

MetaAccordion.propTypes = {
  className: PropTypes.string,
  bodyItems: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MetaAccordion;
