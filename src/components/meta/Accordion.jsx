import React, { Component } from 'react';
import { generate as shortIdGenerate } from 'shortid';
import PropTypes from 'prop-types';


class MetaAccordion extends Component {
  render() {
    const AccordionBody = this.props.bodyItems.map(Item => (
      <div key={shortIdGenerate()}>
        <dt className="accordion__header">{Item.heading}</dt>
        <dd className="accordion__content">
          <p>{Item.body}</p>
        </dd>
      </div>));

    return (
      <dl className="accordion">
        {AccordionBody}
      </dl>
    );
  }
}

MetaAccordion.propTypes = {
  bodyItems: PropTypes.arrayOf(PropTypes.shape({
    heading: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
};

export default MetaAccordion;
