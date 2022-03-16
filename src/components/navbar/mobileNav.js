import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MobileNav = ({ navLinks }) => (
  <nav className="navbar navbar-light fixed-top mobile-nav">
    <div className="container-fluid">
      <NavLink className="font-colour h2" exact to="/">Chaw</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="offcanvas offcanvas-end menu-pop" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <button type="button" className="btn-close text-reset menu-link" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          <ul className="menu-list">
            {navLinks.map((links) => (
              <li key={links.id} className={links.name} data-bs-dismiss="offcanvas">
                <NavLink exact to={links.path} activeClassName="active-link" className="menu-link">
                  {links.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </nav>
);

MobileNav.propTypes = {
  navLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MobileNav;
