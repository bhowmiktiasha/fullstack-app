import React from "react";
import "./EventCard.css";

import { convertTimeFormat } from "../../utils/common";

const EventCard = ({ event, onSelectEvent, isSelected , limitReached , isEventTimeConflict}) => {
  const handleSelect = () => {
    onSelectEvent(event);
  };

  const events = {
    start_time: event.start_time,
    end_time: event.end_time,
  };

  const convertedTime = convertTimeFormat(events.start_time, events.end_time);
  const hasTimeConflict = limitReached || isEventTimeConflict(event);

  return (
    <div className="card-container">
        <div className={`event-card ${isSelected ? "selected" : ""} ${ hasTimeConflict? "disabled" : ""}`}>
        <span>{event.event_category[0]}</span>
        <span className="vertical-bar">|</span>
        <h3>{event.event_name}</h3>
        <p>({event.event_category})</p>
        <p>{convertedTime}</p>
        <button onClick={handleSelect}  disabled={isSelected || hasTimeConflict}>
          {isSelected ? "Selected" : "Select"}
        </button>
      </div>
    </div>
  );
};

export default EventCard;
