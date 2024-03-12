import React from "react";
import EventCard from "../EventCard/EventCard";
import "./EventList.css";

const EventList = ({ events, onSelectEvent, selectedEvents, limitReached, isEventTimeConflict }) => {

  return (
    <div className="event-list">
      <h3 className="event-header">
        <ul>All Events</ul>
      </h3>

      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          onSelectEvent={onSelectEvent} 
          isSelected={selectedEvents.includes(event.id)}
          limitReached={limitReached} 
          isEventTimeConflict ={isEventTimeConflict}
        />
      ))}
    </div>
  );
};

export default EventList;
