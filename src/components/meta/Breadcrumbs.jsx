import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { generate as shortIdGenerate } from 'shortid';
import { typeStyles, typeColors } from './commons/typographyStyles';

const MetaBreadcrumbs = (props) => {
  const breadcrumbs = props.breadcrumbItems.map(breadcrumb => (
    <li
      key={shortIdGenerate()}
      className={`breadcrumb__item ${breadcrumb.home
        ? 'breadcrumb__item--home'
        : ''} ${breadcrumb.typeStyle ? `type--${breadcrumb.typeStyle}` : ''}`}
    >
      {breadcrumb.home ? (
        <Link to={breadcrumb.to}>
          <i className="fa fa-home" aria-hidden="true" />
        </Link>
      ) : (
        ''
      )}
      {breadcrumb.title}
    </li>
  ));

  return (
    <ul
      className={`${props.className} breadcrumbs ${props.typeColor
        ? `type--${props.typeColor}`
        : ''} `}
    >
      {breadcrumbs}
    </ul>
  );
};

MetaBreadcrumbs.defaultProps = {
  breadcrumbItems: [
    {
      title: 'Home',
      to: '',
      home: true,
    },
  ],
  typeStyle: '',
  typeColor: '',
  className: '',
};

MetaBreadcrumbs.propTypes = {
  className: PropTypes.string,
  breadcrumbItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      to: PropTypes.string,
      home: PropTypes.bool,
      typeStyle: PropTypes.oneOf(typeStyles),
    }),
  ),
  typeColor: PropTypes.oneOf(typeColors),
};

export default MetaBreadcrumbs;
