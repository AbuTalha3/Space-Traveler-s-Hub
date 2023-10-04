import React from 'react';
import { NavLink } from 'react-router-dom';
import './Component.css';

function Navbar() {
  return (
    <header>
      <nav className="navbarMain">
        <section className="logoContainer">
          <img className="logoImage" src="/assets/images/planet.png" alt="Planet-pic" />
          <h3 className="headingMain">Space Travelers&apos; Hub</h3>
        </section>
        <section className="linksMain">
          <NavLink to="/">Rockets</NavLink>
          <NavLink to="/missions">Missions</NavLink>
          <div className="divider" />
          <NavLink to="/Profile">Profile</NavLink>
        </section>
      </nav>
    </header>
  );
}

export default Navbar;
