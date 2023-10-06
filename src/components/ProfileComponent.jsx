import React from 'react';
import './Profile.css';
import MissionsProfileComponent from './MissionsProfileComponent';
import RocketProfileComponent from './RocketProfileComponent';

const ProfileComponent = () => (
  <div className="profileContainer">
    <section className="missionsSection">
      <h3>My Missions</h3>
      <MissionsProfileComponent />
    </section>
    <section className="rocketsSection">
      <h3>My Rockets</h3>
      <RocketProfileComponent />
    </section>
  </div>
);

export default ProfileComponent;
