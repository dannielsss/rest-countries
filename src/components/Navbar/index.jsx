import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarBox, NavbarTitle } from './styles';

function Navbar() {
  return (
    <NavbarBox>
      <NavbarTitle>
        <Link to={'/'}>Where in the world?</Link>
      </NavbarTitle>
    </NavbarBox>
  );
}

export default Navbar;
