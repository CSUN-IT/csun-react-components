import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MetaPanel extends Component {
  render() {
    if (this.props.panelObject == null) {
      return (
        <div style={{ border: 'solid 1px black', display: 'flex', justifyContent: 'center' }}>
          Empty Panel Placeholder (Did you forget to pass in a panelObject?)
        </div>
      );
    }
    return (
      <div className="panel">
        {this.props.panelObject.header ?
          <div className="panel__header">
            <strong>{this.props.panelObject.header}</strong>
          </div>
          :
          ''
        }
        {this.props.panelObject.imageURL ?
          <div className="panel__img" style={{ backgroundImage: `url(${this.props.panelObject.imageURL})` }} />
          :
          ''
        }
        {this.props.panelObject.content ?
          <div className="panel__content">
            {this.props.panelObject.content}
          </div>
          :
          ''
        }
        {this.props.panelObject.footer ?
          <div className="panel__footer">
            <strong>{this.props.panelObject.footer.strongText}</strong>
            {this.props.panelObject.footer.text}
          </div>
          :
          ''
        }
      </div>
    );
  }
}

MetaPanel.defaultProps = {
  panelObject: null,
};

MetaPanel.propTypes = {
  panelObject: React.PropTypes.shape({
    header: React.PropTypes.string,
    content: React.PropTypes.string,
    footer: React.PropTypes.shape({
      text: React.PropTypes.string,
      strongText: React.PropTypes.string,
    }),
    imageURL: React.PropTypes.string,
  }),
};

export default MetaPanel;
