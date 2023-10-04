import React from 'react';
import logo from '../Images/planet.png';

function Navbar() {
  return (
    <header>
      <nav>
        <img className="logo" src={logo} alt="Planet-pic" />
      </nav>
    </header>
  );
}

export default Navbar;
