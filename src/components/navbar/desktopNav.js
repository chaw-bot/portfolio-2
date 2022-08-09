import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const DesktopNav = ({ navLinks }) => (
  <nav className="desk-nav">
    <header>
      <NavLink className="text-light h2" to="/">Chaw</NavLink>
    </header>
    <ul>
      {navLinks.map((links) => (
        <li key={links.id} className={links.name}>
          <NavLink to={links.path} smooth duration={500} activeclassname="active" className="text-light h5">
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
