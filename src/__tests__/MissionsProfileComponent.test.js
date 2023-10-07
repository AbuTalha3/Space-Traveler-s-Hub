import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import '@testing-library/jest-dom';
import MissionsProfileComponent from '../components/MissionsProfile/MissionsProfileComponent';

// Mock useSelector
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('MissionsProfileComponent', () => {
  const mockMissionsArray = [
    {
      mission_id: '1',
      mission_name: 'Mission 1',
      reserved: true,
    },
    {
      mission_id: '2',
      mission_name: 'Mission 2',
      reserved: false,
    },
    {
      mission_id: '3',
      mission_name: 'Mission 3',
      reserved: true,
    },
  ];

  beforeEach(() => {
    useSelector.mockImplementation(
      (selectorFn) => selectorFn({ missions: { missionsArray: mockMissionsArray } }),
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the reserved missions correctly', () => {
    const { getByText, queryByText } = render(<MissionsProfileComponent />);

    // Ensure that reserved missions are rendered
    expect(getByText('Mission 1')).toBeInTheDocument();
    expect(getByText('Mission 3')).toBeInTheDocument();

    // Ensure that non-reserved missions are not rendered
    expect(queryByText('Mission 2')).toBeNull();
  });
});
