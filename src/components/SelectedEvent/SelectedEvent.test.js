import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SelectedEvents from './SelectedEvents';

const mockSelectedEvents = [
  { id: 1, event_name: 'Selected Event 1', event_category: ['Category 1'], start_time: '2024-02-21T12:00:00Z', end_time: '2024-02-21T14:00:00Z' },
  { id: 2, event_name: 'Selected Event 2', event_category: ['Category 2'], start_time: '2024-02-21T14:00:00Z', end_time: '2024-02-21T16:00:00Z' },
];

describe('SelectedEvents component', () => {
  test('renders correctly with selected events', () => {
    render(<SelectedEvents selectedEvents={mockSelectedEvents} onDeselectEvent={() => {}} onRepopulateEvent={() => {}} />);

    expect(screen.getByText('Selected Events')).toBeInTheDocument();

    mockSelectedEvents.forEach((event) => {
      expect(screen.getByText(event.event_name)).toBeInTheDocument();
    });
  });

  test('renders correctly with no selected events', () => {
    render(<SelectedEvents selectedEvents={[]} onDeselectEvent={() => {}} onRepopulateEvent={() => {}} />);

    expect(screen.getByText('Selected Events')).toBeInTheDocument();
    expect(screen.getByText('No selected events.')).toBeInTheDocument();
  });

  test('triggers onRepopulateEvent and onDeselectEvent on button click', () => {
    const onRepopulateEventMock = jest.fn();
    const onDeselectEventMock = jest.fn();

    render(<SelectedEvents selectedEvents={mockSelectedEvents} onDeselectEvent={onDeselectEventMock} onRepopulateEvent={onRepopulateEventMock} />);

    mockSelectedEvents.forEach((event) => {
      const removeButton = screen.getByText('Remove');
      fireEvent.click(removeButton);

      expect(onRepopulateEventMock).toHaveBeenCalledWith(event);
      expect(onDeselectEventMock).toHaveBeenCalledWith(event.id);
    });
  });

});
