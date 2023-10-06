import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cancelReservation } from './Redux/Rockets/rocketsSlice';
import './RocketCTA.css';

function CancelReservationCTA({ id }) {
  const dispatch = useDispatch();
  const handleCancel = () => {
    dispatch(cancelReservation(id));
  };
  return (
    <div>
      <button type="button" onClick={handleCancel} className="cancelReserveButton">Cancel Reservation</button>
    </div>
  );
}

CancelReservationCTA.propTypes = {
  id: PropTypes.number.isRequired,
};

export default CancelReservationCTA;
