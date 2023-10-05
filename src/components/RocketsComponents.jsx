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
        {
          rocketArr.map((rocket) => (
            <div className="rocketContainer" key={rocket.id}>
              <div className="imageContainerRocket">
                <img className="rocketImage" src={rocket.flickr_images[0]} alt="Rocket" />
              </div>
              <div className="rocketInfoContainer">
                <p className="rocketHeading">{rocket.name}</p>
                <p className="rocketDescription">{rocket.description}</p>
                <button type="button" className="reserveButton">Reserve Rocket</button>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default RocketsComponents;
