import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRocketData } from './Redux/Rockets/rocketsSlice';
import './Rockets.css';

function RocketsComponents() {
  const { rocketArr } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();
  console.log(rocketArr);
  useEffect(() => {
    dispatch(getRocketData());
  }, []);
  return (
    <>
      <div className="outerContainer">
        <div className="rocketContainer">
          <div className="imageContainerRocket">
            <img className="rocketImage" src="/assets/images/planet.png" alt="Rocket" />
          </div>
          <div className="rocketInfoContainer">
            <p>Falcon1</p>
            <p>The Missions section displays a list</p>
            <button type="button" className="reserveButton">Reserve Rocket</button>
          </div>
        </div>
        <div className="rocketContainer">
          <div className="imageContainerRocket">
            <img className="rocketImage" src="/assets/images/planet.png" alt="Rocket" />
          </div>
          <div className="rocketInfoContainer">
            <p>Falcon1</p>
            <p>The Missions section displays a list</p>
            <button type="button" className="reserveButton">Reserve Rocket</button>
          </div>
        </div>
        <div className="rocketContainer">
          <div className="imageContainerRocket">
            <img className="rocketImage" src="/assets/images/planet.png" alt="Rocket" />
          </div>
          <div className="rocketInfoContainer">
            <p>Falcon1</p>
            <p>The Missions section displays a list</p>
            <button type="button" className="reserveButton">Reserve Rocket</button>
          </div>
        </div>
        <div className="rocketContainer">
          <div className="imageContainerRocket">
            <img className="rocketImage" src="/assets/images/planet.png" alt="Rocket" />
          </div>
          <div className="rocketInfoContainer">
            <p>Falcon1</p>
            <p>The Missions section displays a list</p>
            <button type="button" className="reserveButton">Reserve Rocket</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RocketsComponents;
