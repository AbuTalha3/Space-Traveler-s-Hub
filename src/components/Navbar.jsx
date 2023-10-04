import React from 'react';
import { NavLink } from 'react-router-dom';
import './Component.css';

function Navbar() {
  return (
    <header>
      <nav className="navbarMain">
        <section className="logoContainer">
          <img className="logoImage" src="/assets/images/planet.png" size={40} alt="Planet-pic" />
          <h3 className="headingMain">Space Travelers&apos; Hub</h3>
        </section>
        <section className="linksMain">
          <NavLink to="/">Rockets</NavLink>
          <NavLink to="/missions">Missions</NavLink>
          <NavLink to="/Profile">Profile</NavLink>
        </section>
      </nav>
    </header>
  );
}

export default Navbar;
