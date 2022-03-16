import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const DesktopNav = ({ navLinks }) => (
  <nav className="desk-nav">
    <header>
      <h1>Chaw</h1>
    </header>
    <ul>
      {navLinks.map((links) => (
        <li key={links.id} className={links.name}>
          <NavLink exact to={links.path} activeClassName="active-link">
            {links.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

DesktopNav.propTypes = {
  navLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DesktopNav;
