import React from 'react';
import PropTypes from 'prop-types';

const MetaPanel = props => (
  <div className={`${props.className} panel`}>
    {props.panelHeader ? (
      <div className="panel__header">
        <strong>{props.panelHeader.text}</strong>
      </div>
    ) : (
        null
      )}
    {props.panelImage ? (
      <div
        className="panel__img"
        style={{ backgroundImage: `url(${props.panelImage.imageURL})` }}
      />
    ) : (
        null
      )}
    <div className="panel__content">{props.panelContent.text}</div>
    {props.panelFooter ? (
      <div className="panel__footer">
        <strong>{props.panelFooter.strongText}</strong>
        {props.panelFooter.text}
      </div>
    ) : (
        null
      )}
  </div>
);

MetaPanel.defaultProps = {
  panelHeader: null,
  className: '',
  panelImage: null,
  panelContent: {
    text: '',
  },
  panelFooter: null,
};

MetaPanel.propTypes = {
  className: PropTypes.string,
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
