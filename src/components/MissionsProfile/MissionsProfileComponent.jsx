import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.css';

const MissionsProfileComponent = () => {
  const { missionsArray } = useSelector((store) => store.missions);
  const reservedMissions = missionsArray.filter((missions) => missions.reserved === true);
  return (
    <div className="missionsContainer">
      {
            reservedMissions.map((item) => (
              <p key={item.mission_id} className="mission">{item.mission_name}</p>
            ))
        }
    </div>
  );
};

export default MissionsProfileComponent;
