import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { generate as shortIdGenerate } from 'shortid';
import { typeStyles, typeColors } from './commons/typographyStyles';
import PropTypes from 'prop-types';

class MetaBreadcrumbs extends Component {

  render() {
    const breadcrumbs = this.props.breadcrumbItems.map(breadcrumb =>
      <li key={shortIdGenerate()} className={`breadcrumb__item ${breadcrumb.home ? 'breadcrumb__item--home' : ''} ${breadcrumb.typeStyle ? `type--${breadcrumb.typeStyle}` : ''}`}>
        {breadcrumb.home ?
          <Link to={breadcrumb.to}>
            <i className="fa fa-home" aria-hidden="true" />
          </Link>
          :
          ''
        }
        {breadcrumb.title}
      </li>,
    );

    return (
      <ul className={`breadcrumbs ${this.props.typeColor ? `type--${this.props.typeColor}` : ''} `}>
        {breadcrumbs}
      </ul>
    );
  }
}

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
};

MetaBreadcrumbs.propTypes = {
  breadcrumbItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    to: PropTypes.string,
    home: PropTypes.bool,
    typeStyle: PropTypes.oneOf(typeStyles),
  }),
  ),
  typeColor: PropTypes.oneOf(typeColors),
};

export default MetaBreadcrumbs;
