import React, { Component } from 'react';
import { generate as shortIdGenerate } from 'shortid';
import { Link } from 'react-router-dom';
import { typeStyles, typeColors } from './commons/typographyStyles';

class MetaSubNav extends Component {
  render() {
    // Generates each individual sub nav link

    const subNavLinks = this.props.menuItems.map(link =>
      <li className="tab__list" key={shortIdGenerate()}>
        <Link className={`tab__link ${link.active ? 'tab__link--active' : ''} ${this.props.typeColor ? `type--${this.props.typeColor}` : ''}`} to={link.to}>{link.title}</Link>
      </li>,
    );

    return (
      <div className="tab-container">
        <ul className="tabs cf">
          {subNavLinks}
        </ul>
      </div>);
  }
}

MetaSubNav.defaultProps = {
  menuItems: [{}],
  typeColor: '',
};

MetaSubNav.propTypes = {
  menuItems: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    to: React.PropTypes.string.isRequired,
    active: React.PropTypes.bool.isRequired,
    typeStyle: React.PropTypes.oneOf(typeStyles),
  }),
  ),
  typeColor: React.PropTypes.oneOf(typeColors),
};

export default MetaSubNav;
