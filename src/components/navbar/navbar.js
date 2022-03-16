import React from 'react';
import MobileNav from './mobileNav';
import DesktopNav from './desktopNav';
import navLinks from '../../helpers/links';

const NavBar = () => (
  <>
    <DesktopNav navLinks={navLinks} />
    <MobileNav navLinks={navLinks} />
  </>
);

export default NavBar;
