import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import JoinMissionCTA from '../components/MissionCTA/JoinMissionCTA';
import { joinMission } from '../Redux/Missions/missionsSlice';

// Mock useDispatch and joinMission
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));
jest.mock('../components/Redux/Missions/missionsSlice', () => ({
  joinMission: jest.fn(),
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
    const { getByText } = render(<JoinMissionCTA id={missionId} />);
    const joinMissionButton = getByText('Join Mission');
    fireEvent.click(joinMissionButton);

    expect(mockDispatch).toHaveBeenCalledWith(joinMission(missionId));
  });
});
