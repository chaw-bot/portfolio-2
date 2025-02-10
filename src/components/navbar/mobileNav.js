import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import logo from '../../images/chaw.png';

const MobileNav = ({ navLinks }) => (
  <nav className="navbar navbar-light fixed-top mobile-nav">
    <div className="container-fluid">
      <Link className="text-light h2" to="homePage">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span className="navbar-toggler-icon">
          <span className="visually-hidden">Toggle navigation</span>
        </span>
      </button>
      <div className="offcanvas offcanvas-end menu-pop" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <button type="button" className="btn-close text-reset menu-link" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          <ul className="menu-list">
            {navLinks.map((links) => (
              <li key={links.id} className={links.name} data-bs-dismiss="offcanvas">
                <Link to={links.pageName} smooth duration={500} activeclassname="active-link" className="menu-link">
                  {links.text}
                </Link>
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
