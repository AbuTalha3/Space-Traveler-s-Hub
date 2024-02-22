import React from 'react';
import { NavLink } from 'react-router-dom';
import SpaceTravelerIcon from '../images/planet.png';

const Navbar = () => (
  <nav className="navigation-bar">
    <div className="nav-logo">
      <img className="nav-logo-img" src={SpaceTravelerIcon} alt="logo" />
      <span>Space Traveler&apos;s Hub</span>
    </div>
    <ul className="nav-ul">
      <li>
        <NavLink className={({ isActive }) => (isActive ? 'rockets-link active-link' : 'none')} to="/">
          ROCKETS
        </NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? 'missions-link active-link' : 'none')} to="Missions">
          MISSIONS
        </NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? 'myprofile-link active-link' : 'none myprofile-none')} to="MyProfile">
          MY PROFILE
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
