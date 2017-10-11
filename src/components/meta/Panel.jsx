import React from 'react';
import PropTypes from 'prop-types';

const MetaPanel = props => (
  <div className="panel">
    {props.panelHeader ? (
      <div className="panel__header">
        <strong>{props.panelHeader.text}</strong>
      </div>
      ) : (
        ''
      )}
    {props.panelImage ? (
      <div
        className="panel__img"
        style={{ backgroundImage: `url(${props.panelImage.imageURL})` }}
      />
      ) : (
        ''
      )}
    <div className="panel__content">{props.panelContent.text}</div>
    {props.panelFooter ? (
      <div className="panel__footer">
        <strong>{props.panelFooter.strongText}</strong>
        {props.panelFooter.text}
      </div>
      ) : (
        ''
      )}
  </div>
  );

MetaPanel.defaultProps = {
  panelHeader: {},
  panelImage: {},
  panelContent: {
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam voluptatem harum cupiditate quae aliquid quia optio suscipit ex temporibus adipisci.',
  },
  panelFooter: {},
};

MetaPanel.propTypes = {
  panelHeader: PropTypes.shape({
    text: PropTypes.string.isRequired,
  }),
  panelImage: PropTypes.shape({
    imageURL: PropTypes.string.isRequired,
  }),
  panelContent: PropTypes.shape({
    text: PropTypes.string.isRequired,
  }).isRequired,
  panelFooter: PropTypes.shape({
    strongText: PropTypes.string,
    text: PropTypes.string.isRequired,
  }),
};

export default MetaPanel;
