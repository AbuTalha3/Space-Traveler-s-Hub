import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import LeaveMissionCTA from '../components/MissionCTA/LeaveMissionCTA';
import { cancelMission } from '../Redux/Missions/missionsSlice';

// Mock useDispatch and joinMission
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));
jest.mock('../components/Redux/Missions/missionsSlice', () => ({
  cancelMission: jest.fn(),
}));

describe('JoinMissionCTA', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('dispatches joinMission action when the button is clicked', () => {
    const missionId = '123';
    const { getByText } = render(<LeaveMissionCTA id={missionId} />);
    const leaveMissionButton = getByText('Leave Mission');
    fireEvent.click(leaveMissionButton);

    expect(mockDispatch).toHaveBeenCalledWith(cancelMission(missionId));
  });
});
