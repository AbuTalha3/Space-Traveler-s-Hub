import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRocketData } from './Redux/Rockets/rocketsSlice';
import CancelReservationCTA from './CancelReservationCTA';
import ReserveRocketCTA from './ReserveRocketCTA';
import RocketReservedCTA from './RocketReservedCTA';
import './Rockets.css';
import './RocketCTA.css';

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
                <div className="rocketDescription">
                  <span className="reserveButton">
                    {
                  rocket.reserved
                    ? <RocketReservedCTA /> : null
                }
                  </span>
                  <p>{rocket.description }</p>
                </div>
                {
                  rocket.reserved === false
                    ? <ReserveRocketCTA id={rocket.id} /> : <CancelReservationCTA id={rocket.id} />
                }
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default RocketsComponents;
