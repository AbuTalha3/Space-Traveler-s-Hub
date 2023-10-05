import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from './Redux/Missions/missionsSlice';
import './Missions.css';

const MissionsComponent = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((store) => store.missions);
  console.log(missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  return (
    <div className="missionsContainer">
      <table className="tableHead">
        <tr>
          <th style={{ width: '10%' }}>Mission</th>
          <th style={{ width: '68%' }}>Description</th>
          <th style={{ width: '8%' }}>Status</th>
          <th style={{ width: '14%' }} />
        </tr>
        <tr>
          <td style={{ width: '10%' }}>Mission</td>
          <td style={{ width: '68%' }}>Description</td>
          <td style={{ width: '8%' }} className="joinAction"><button type="button">Join Mission</button></td>
          <td style={{ width: '14%' }} className="leaveAction"><button type="button">Leave Mission</button></td>
        </tr>
        <tr>
          <td style={{ width: '10%' }}>Mission</td>
          <td style={{ width: '68%' }}>Description</td>
          <td style={{ width: '8%' }} className="joinAction"><button type="button">Join Mission</button></td>
          <td style={{ width: '14%' }} className="leaveAction"><button type="button">Leave Mission</button></td>
        </tr>
        <tr>
          <td style={{ width: '10%' }}>Mission</td>
          <td style={{ width: '68%' }}>Description</td>
          <td style={{ width: '8%' }} className="joinAction"><button type="button">Join Mission</button></td>
          <td style={{ width: '14%' }} className="leaveAction"><button type="button">Leave Mission</button></td>
        </tr>
        <tr>
          <td style={{ width: '10%' }}>Mission</td>
          <td style={{ width: '68%' }}>Description</td>
          <td style={{ width: '8%' }} className="joinAction"><button type="button">Join Mission</button></td>
          <td style={{ width: '14%' }} className="leaveAction"><button type="button">Leave Mission</button></td>
        </tr>
        <tr>
          <td style={{ width: '10%' }}>Mission</td>
          <td style={{ width: '68%' }}>Description</td>
          <td style={{ width: '8%' }} className="joinAction"><button type="button">Join Mission</button></td>
          <td style={{ width: '14%' }} className="leaveAction"><button type="button">Leave Mission</button></td>
        </tr>
      </table>
    </div>
  );
};

export default MissionsComponent;
