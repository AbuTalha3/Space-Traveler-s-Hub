import React from 'react';
import { useSelector } from 'react-redux';
import '../MissionsProfile/Profile.css';

function RocketProfileComponent() {
  const { rocketArr } = useSelector((store) => store.rockets);
  const reservedRockets = rocketArr.filter((rockets) => rockets.reserved === true);
  return (
    <div className="missionsContainer">
      {
          reservedRockets.map((item) => (
            <p key={item.id} className="mission">{item.name}</p>
          ))
      }
    </div>
  );
}

export default RocketProfileComponent;
