import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission } from './Redux/Missions/missionsSlice';

import './CTA.css';

const JoinMissionCTA = ({ id }) => {
  const dispatch = useDispatch();
  console.log(id);
  const handleJoin = () => {
    dispatch(joinMission(id));
  };

  return (
    <div>
      <button type="button" className="joinMissionCTA" onClick={() => handleJoin()}>
        Join Mission
      </button>
    </div>
  );
};

JoinMissionCTA.propTypes = {
  id: PropTypes.string.isRequired,
};

export default JoinMissionCTA;
