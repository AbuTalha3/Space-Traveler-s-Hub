import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addReservation } from '../../Redux/Rockets/rocketsSlice';
import './RocketCTA.css';

function ReserveRocketCTA({ id }) {
  const dispatch = useDispatch();
  const handleReserve = () => {
    dispatch(addReservation(id));
  };
  return (
    <div>
      <button type="button" onClick={handleReserve} className="reserveRocketButton">Reserve Rocket</button>
    </div>
  );
}

ReserveRocketCTA.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ReserveRocketCTA;
