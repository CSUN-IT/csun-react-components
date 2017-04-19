import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { generate as shortIdGenerate } from 'shortid';

class MetaSideNav extends Component {
  render() {
    const navLinks = this.props.menuItems.map((link) => {
      const liClassNames = `nav__item ${link.active ? 'nav__item--active' : ''} ${link.fill ? 'nav__item--fill' : ''}`;

      return (<li className={liClassNames} key={shortIdGenerate()}>
        <Link className="nav__link" to={link.to}>{ link.title }</Link>
      </li>);
    });

    return (<ul className="nav">
      {navLinks}
    </ul>);
  }
}

MetaSideNav.defaultProps = {
  menuItems: [{}],
  navColor: '',
};

MetaSideNav.propTypes = {
  menuItems: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    to: React.PropTypes.string.isRequired,
    active: React.PropTypes.bool.isRequired,
    fill: React.PropTypes.bool,
  }),
  ),
};

export default MetaSideNav;
