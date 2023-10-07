import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RocketReservedCTA from '../components/RocketCTA/RocketReservedCTA';

describe('RocketReservedCTA', () => {
  it('renders the Reserved button', () => {
    render(<RocketReservedCTA />);

    // Check if the button is rendered
    const reservedButton = screen.getByText('Reserved');
    expect(reservedButton).toBeInTheDocument();
  });

  it('has the correct button type', () => {
    render(<RocketReservedCTA />);

    // Check if the button has the correct type attribute
    const reservedButton = screen.getByText('Reserved');
    expect(reservedButton).toHaveAttribute('type', 'button');
  });

  it('has the correct CSS class', () => {
    render(<RocketReservedCTA />);

    // Check if the button has the correct CSS class
    const reservedButton = screen.getByText('Reserved');
    expect(reservedButton).toHaveClass('reserveButton');
  });
});
