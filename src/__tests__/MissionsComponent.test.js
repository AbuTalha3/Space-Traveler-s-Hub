/* eslint-disable max-len */
import React from 'react';
import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import MissionsComponent from '../components/Missions/MissionsComponent';
import { fetchMissions } from '../Redux/Missions/missionsSlice';

// Mock useSelector and useDispatch
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

// Mock the fetchMissions action
jest.mock('../Redux/Missions/missionsSlice', () => ({
  fetchMissions: jest.fn(),
}));

describe('MissionsComponent', () => {
  const mockDispatch = jest.fn();
  const mockMissionsArray = [
    {
      mission_id: '1',
      mission_name: 'Mission 1',
      description: 'Description 1',
      reserved: true,
    },
    {
      mission_id: '2',
      mission_name: 'Mission 2',
      description: 'Description 2',
      reserved: false,
    },
  ];

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
    useSelector.mockImplementation((selectorFn) => selectorFn({ missions: { missionsArray: mockMissionsArray } }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('dispatches fetchMissions action if missionsArray is empty', () => {
    useSelector.mockImplementation((selectorFn) => selectorFn({ missions: { missionsArray: [] } }));

    render(<MissionsComponent />);

    expect(fetchMissions).toHaveBeenCalled();
  });
});
