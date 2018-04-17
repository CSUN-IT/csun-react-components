import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { generate as shortIdGenerate } from 'shortid';
import './sass/_webSlider.scss';
import WebCard from './Card';

class WebSlider extends Component {
  constructor({ children }) {
    super();
    this.state = {
      slideCount: 0,
      cards: children,
    };
    this.previousSlide = this.previousSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide() {
    this.state.slideCount > 0 ? this.setState({ slideCount: this.state.slideCount - 1 }) : null;
  }

  nextSlide() {
    this.state.slideCount < this.state.cards.length - 1 ? this.setState({ slideCount: this.state.slideCount + 1 }) : null;
  }

  render() {
    var index = this.state.cards.map((cards, idx) => {
      return (
        <div key={shortIdGenerate()}>{this.state.slideCount === idx ? <WebCard
          title={cards.props.title}
          content={cards.props.content}
          img={cards.props.img}
          linkTo={cards.props.linkTo}
          buttonArray={cards.props.buttonArray}
        /> : null }
        </div>
      );
    });

    return (
      <div className="slider">
        {this.state.slideCount > 0 ?
          <button className="backArrow" onClick={() => this.previousSlide()}>
            <i className="fa fa-angle-left fa-3x" aria-hidden="true" />
          </button> : null }
        {index}
        {this.state.slideCount < this.state.cards.length - 1 ?
          <button className="nextArrow" onClick={() => this.nextSlide()}>
            <i className="fa fa-angle-right fa-3x" aria-hidden="true" />
          </button> : null }
      </div>
    );
  }
}

WebSlider.defaultProps = {
  cards: [
    {
      className: '',
      title: 'Example',
      content: 'Content',
      img: 'image',
      linkTo: '',
      buttonArray: [],
    },
  ],
};

WebSlider.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
      img: PropTypes.string,
      linkTo: PropTypes.string,
      buttonArray: PropTypes.arrayOf(PropTypes.object),
    }),
  ),
};

export default WebSlider;
