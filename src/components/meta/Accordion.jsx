import React, { Component } from 'react';


class MetaAccordion extends Component {
  render() {
    return (
      <dl className="accordion">
        <dt className="accordion__header">Test1</dt>
        <dd className="accordion__content">
          <p>She sells seashells by the seashore</p>
        </dd>
        <dt className="accordion__header">Test 2</dt>
        <dd className="accordion__content">
          <p>The quick brown fox jumps over the lazy dog.</p>
        </dd>
      </dl>
    );
  }
}

export default MetaAccordion;
