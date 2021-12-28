import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const navLinks = [
    {
      id: 1,
      path: '/',
      text: 'home',
      pageName: 'homePage',
    },
    {
      id: 2,
      path: '/projectsPage',
      text: 'projects',
      pageName: 'projectsPage',
    },
    {
      id: 3,
      path: '/aboutPage',
      text: 'about',
      pageName: 'aboutPage',
    },
    {
      id: 4,
      path: '/contactPage',
      text: 'contact',
      pageName: 'contactPage',
    },
  ];

  return (
    <nav>
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
};

export default NavBar;
