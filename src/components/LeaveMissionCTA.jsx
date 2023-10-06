import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cancelMission } from './Redux/Missions/missionsSlice';
import './CTA.css';

const LeaveMissionCTA = ({ id }) => {
  const dispatch = useDispatch();
  const handleLeave = () => {
    dispatch(cancelMission(id));
  };
  return (
    <div><button type="button" className="leaveMissionCTA" onClick={handleLeave}>Leave Mission</button></div>
  );
};

LeaveMissionCTA.propTypes = {
  id: PropTypes.string.isRequired,
};

export default LeaveMissionCTA;
