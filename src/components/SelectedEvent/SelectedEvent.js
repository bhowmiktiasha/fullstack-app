import React from "react";
import "./SelectedEvent.css";
import { convertTimeFormat } from "../../utils/common";

const SelectedEvents = ({
  selectedEvents,
  onDeselectEvent,
  onRepopulateEvent,
}) => {
  return (
    <div className="selected-events">
      <h3 className="event-header">Selected Events</h3>

      {selectedEvents.map((event) => {
        if (event && event.start_time && event.end_time) {
          const convertedTime = convertTimeFormat(
            event.start_time,
            event.end_time
          );

          return (
            <div key={event.id} className="event-card">
              <span>{event.event_category[0]}</span>
              <span className="vertical-bar">|</span>
              <div style={{ display: "inline-table" }}>
                <h3>{event.event_name}</h3>
                <p>({event.event_category})</p>
                <p>{convertedTime}</p>
                <button
                  onClick={() => {
                    onRepopulateEvent(event);
                    onDeselectEvent(event.id);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        } else {
          // Handle the case where the event is missing start_time or end_time
          return null;
        }
      })}
    </div>
  );
};

export default SelectedEvents;
