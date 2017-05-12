import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { generate as shortIdGenerate } from 'shortid';
import { typeStyles, typeColors } from './commons/typographyStyles';

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
  breadcrumbItems: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    to: React.PropTypes.string,
    home: React.PropTypes.bool,
    typeStyle: React.PropTypes.oneOf(typeStyles),
  }),
  ),
  typeColor: React.PropTypes.oneOf(typeColors),
};

export default MetaBreadcrumbs;
