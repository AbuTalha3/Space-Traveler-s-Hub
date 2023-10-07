import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useDispatch } from 'react-redux';
import CancelReservationCTA from '../components/RocketCTA/CancelReservationCTA';
import { cancelReservation } from '../Redux/Rockets/rocketsSlice';

// Mock useDispatch and cancelReservation
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));
jest.mock('../Redux/Rockets/rocketsSlice', () => ({
  cancelReservation: jest.fn(),
}));

describe('CancelReservationCTA', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the Cancel Reservation button', () => {
    const { getByText } = render(<CancelReservationCTA id={1} />);
    const cancelButton = getByText('Cancel Reservation');
    expect(cancelButton).toBeInTheDocument();
  });

  it('dispatches cancelReservation action when the button is clicked', () => {
    const rocketId = 1;
    const { getByText } = render(<CancelReservationCTA id={rocketId} />);
    const cancelButton = getByText('Cancel Reservation');

    fireEvent.click(cancelButton);

    expect(mockDispatch).toHaveBeenCalledWith(cancelReservation(rocketId));
  });
});
