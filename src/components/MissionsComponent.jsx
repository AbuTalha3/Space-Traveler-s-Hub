import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from './Redux/Missions/missionsSlice';
import NotMemberCTA from './NotMemberCTA';
import LeaveMissionCTA from './LeaveMissionCTA';
import ActiveMemberCTA from './ActiveMemberCTA';
import JoinMissionCTA from './JoinMissionCTA';
import './Missions.css';

const MissionsComponent = () => {
  const dispatch = useDispatch();
  const { missionsArray } = useSelector((store) => store.missions);
  useEffect(() => {
    if (!missionsArray.length) {
      dispatch(fetchMissions());
    }
  }, [missionsArray, dispatch]);

  return (
    <div className="missionsContainer">
      <table className="tableHead">
        <tr>
          <th style={{ width: '10%' }}>Mission</th>
          <th style={{ width: '68%' }}>Description</th>
          <th style={{ width: '8%' }}>Status</th>
          <div style={{ width: '14%', backgroundColor: 'white' }} />
        </tr>
        {missionsArray.map((mission) => (
          <tr key={mission.mission_id}>
            <td style={{ width: '10%' }} className="name">{mission.mission_name}</td>
            <td style={{ width: '68%' }} className="description">{mission.description}</td>
            <td style={{ width: '8%' }} className="joinAction">
              {mission.reserved ? <ActiveMemberCTA /> : <NotMemberCTA />}
            </td>
            <td style={{ width: '14%' }} className="leaveAction">
              {
              mission.reserved === false
                ? <JoinMissionCTA id={mission.mission_id} />
                : <LeaveMissionCTA id={mission.mission_id} />
}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default MissionsComponent;
