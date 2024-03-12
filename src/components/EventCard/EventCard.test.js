import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EventCard from './EventCard';
import { convertTimeFormat } from '../../utils/common';

const mockEvent = {
  event_name: 'Test Event',
  event_category: ['Test Category'],
  start_time: '2024-02-21T12:00:00Z', end_time: '2024-02-21T14:00:00Z'
};

describe('EventCard component', () => {
  test('renders correctly', () => {
    render(<EventCard event={mockEvent} onSelectEvent={() => {}} isSelected={false} limitReached={false} isEventTimeConflict={() => false} />);
    
    expect(screen.getByText('Test Category')).toBeInTheDocument();
    expect(screen.getByText('Test Event')).toBeInTheDocument();
    expect(screen.getByText('(Test Category)')).toBeInTheDocument();
    expect(screen.getByText(convertTimeFormat(mockEvent.start_time, mockEvent.end_time))).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('handles selection correctly', () => {
    const onSelectEventMock = jest.fn();
    render(<EventCard event={mockEvent} onSelectEvent={onSelectEventMock} isSelected={false} limitReached={false} isEventTimeConflict={() => false} />);
    
    const selectButton = screen.getByRole('button');
    fireEvent.click(selectButton);

    expect(onSelectEventMock).toHaveBeenCalledWith(mockEvent);
  });

  test('disables button when event is selected', () => {
    render(<EventCard event={mockEvent} onSelectEvent={() => {}} isSelected={true} limitReached={false} isEventTimeConflict={() => false} />);
    
    const selectButton = screen.getByRole('button');
    expect(selectButton).toBeDisabled();
    expect(selectButton).toHaveTextContent('Selected');
  });

  test('disables button when time conflict exists', () => {
    render(<EventCard event={mockEvent} onSelectEvent={() => {}} isSelected={false} limitReached={false} isEventTimeConflict={() => true} />);
    
    const selectButton = screen.getByRole('button');
    expect(selectButton).toBeDisabled();
    expect(selectButton).toHaveTextContent('Select');
  });

  test('disables button when limit is reached', () => {
    render(<EventCard event={mockEvent} onSelectEvent={() => {}} isSelected={false} limitReached={true} isEventTimeConflict={() => false} />);
    
    const selectButton = screen.getByRole('button');
    expect(selectButton).toBeDisabled();
    expect(selectButton).toHaveTextContent('Select');
  });

  // Add more test cases as needed for specific scenarios
});
