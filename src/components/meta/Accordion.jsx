import React, { Component } from 'react';


class MetaAccordion extends Component {
  render() {
    const AccordionBody = this.props.bodyItems.map(Item => (
      <div>
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
  bodyItems: React.PropTypes.arrayOf(React.PropTypes.shape({
    heading: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired,
  })).isRequired,
};

export default MetaAccordion;
