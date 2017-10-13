import React from 'react';
import PropTypes from 'prop-types';

const MetaAlert = (props) => {
  const alertParentClasses = `${props.className} alert ${props.color ? `alert--${props.color}` : ''}`;
  const strongText = <strong>{props.strongText}</strong>;

  return (
    <div className={alertParentClasses}>
      {props.strongText ? strongText : ''} {props.text}
      <a href={props.to} className="alert__close" data-alert-close onClick={props.onClick}>
        &times;
      </a>
    </div>
  );
};

MetaAlert.defaultProps = {
  color: '',
  strongText: '',
  text: '',
  className: '',
  to: '#',
  onClick: () => {},
};

MetaAlert.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['info', 'success', 'warning', 'danger']),
  strongText: PropTypes.string,
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
};

export default MetaAlert;
