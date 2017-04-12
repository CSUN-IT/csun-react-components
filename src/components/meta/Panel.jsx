import React, { Component } from 'react';

class MetaPanel extends Component {
  render() {
    return (
      <div className="panel">
        {this.props.panelHeader ?
          <div className="panel__header">
            <strong>{this.props.panelHeader.text}</strong>
          </div>
          :
          ''
        }
        {this.props.panelImage ?
          <div className="panel__img" style={{ backgroundImage: `url(${this.props.panelImage.imageURL})` }} />
          :
          ''
        }
        <div className="panel__content">
          {this.props.panelContent.text}
        </div>
        {this.props.panelFooter ?
          <div className="panel__footer">
            <strong>{this.props.panelFooter.strongText}</strong>
            {this.props.panelFooter.text}
          </div>
          :
          ''
        }
      </div>
    );
  }
}

MetaPanel.defaultProps = {
  panelHeader: {},
  panelImage: {},
  panelContent: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam voluptatem harum cupiditate quae aliquid quia optio suscipit ex temporibus adipisci.',
  },
  panelFooter: {},
};

MetaPanel.propTypes = {
  panelHeader: React.PropTypes.shape({
    text: React.PropTypes.string.isRequired,
  }),
  panelImage: React.PropTypes.shape({
    imageURL: React.PropTypes.string.isRequired,
  }),
  panelContent: React.PropTypes.shape({
    text: React.PropTypes.string.isRequired,
  }).isRequired,
  panelFooter: React.PropTypes.shape({
    strongText: React.PropTypes.string,
    text: React.PropTypes.string.isRequired,
  }),
};

export default MetaPanel;
