import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { generate as shortIdGenerate } from 'shortid';
import './sass/_webSlider.scss';

class WebSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideCount: 0,
      cards: props.cards,
    };
    this.previousSlide = this.previousSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide() {
    this.state.slideCount > 0 ? this.setState({ slideCount: this.state.slideCount - 1 }) : null;
  }

  nextSlide() {
    this.state.slideCount < this.props.cards.length - 1 ? this.setState({ slideCount: this.state.slideCount + 1 }) : null;
  }

  render() {

    var index = this.props.cards.map((card, idx) => {
      return (
        <div key={shortIdGenerate()}>{this.state.slideCount === idx ? <div>{card.text}</div> : null}
        </div>
      );
    });

    return (
      <div className="slider">
        <div className="backArrow" onClick={() => this.previousSlide()}>
          <i className="fa fa-arrow-left fa-2x" aria-hidden="true" />
        </div>
        <div className="cardContainer">
          {index}
        </div>
        <div className="nextArrow" onClick={() => this.nextSlide()}>
          <i className="fa fa-arrow-right fa-2x" aria-hidden="true" />
        </div>
      </div>
    );
  }
}

WebSlider.defaultProps = {
  className: '',
  cards: [
    {
      text: 'Insert Text',
    },
  ],
};

WebSlider.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    }),
  ),
};

export default WebSlider;
