import React from 'react';
import logo from '../Images/planet.png';

function Navbar() {
  return (
    <header>
      <nav>
        <img className="logo" src={logo} alt="Planet-pic" />
        <h3 className="heading-main">Space Travelers&apos; Hub</h3>
      </nav>
    </header>
  );
}

export default Navbar;
