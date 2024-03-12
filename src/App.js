import React, { useState, useEffect } from "react";
import SelectedEvents from "./components/SelectedEvent/SelectedEvent";
import EventList from "./components/EventList/EventList";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";

const App = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [limitReached, setLimitReached] = useState(false);
  const [loading, setLoading] = useState(false);
  const [someKey, setSomeKey] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api");
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const data = await response.json();
        setEvents(data.mockEvents);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function ErrorFallback({ error, resetErrorBoundary }) {
    return (
      <div role="alert" style={{ textAlign: "center", marginTop: "300px" }}>
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    );
  }

  // Error logging function
  function logErrorToService(error, info) {
    // Use your preferred error logging service
    console.error("Caught an error:", error, info);
  }

  // Load selected events from local storage on component mount
  useEffect(() => {
    const storedEvents =
      JSON.parse(localStorage.getItem("selectedEvents")) || [];
    setSelectedEvents(storedEvents);
  }, []);

  //time conflict check
  const isEventTimeConflict = (event) => {
    return selectedEvents.some(
      (selectedEvent) =>
        (event.start_time >= selectedEvent.start_time &&
          event.start_time <= selectedEvent.end_time) ||
        (event.end_time >= selectedEvent.start_time &&
          event.end_time <= selectedEvent.end_time)
    );
  };

  //select event handler
  const handleSelectEvent = (selectedEvent) => {
    if (selectedEvents.length < 3 && !isEventTimeConflict(selectedEvent)) {
      setEvents(events.filter((event) => event.id !== selectedEvent.id));
      const updatedSelectedEvents = [...selectedEvents, selectedEvent];
      setSelectedEvents(updatedSelectedEvents);
      localStorage.setItem(
        "selectedEvents",
        JSON.stringify(updatedSelectedEvents)
      );
      setLimitReached(updatedSelectedEvents.length >= 3);
    }
  };

  //deselect event handler
  const handleDeselectEvent = (eventId) => {
    const removedEvent = selectedEvents.find((event) => event.id === eventId);
    if (removedEvent) {
      const updatedSelectedEvents = selectedEvents.filter(
        (event) => event.id !== eventId
      );
      setSelectedEvents(updatedSelectedEvents);
      setEvents([...events, removedEvent]);
      localStorage.setItem(
        "selectedEvents",
        JSON.stringify(updatedSelectedEvents)
      );
      setLimitReached(false);
    }
  };

  //repopulate events back on deselecting
  const onRepopulateEvent = (removedEvent) => {
    setEvents([...events, removedEvent]);
  };

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => setSomeKey(null)} // reset the state of your app here
      resetKeys={[someKey]} // reset the error boundary when `someKey` changes
      onError={logErrorToService}
    >
      {loading ? (
        <div style={{ alignItems: "center" }}>"Loading"</div>
      ) : (
        <div className="home-page">
          <EventList
            events={events}
            onSelectEvent={handleSelectEvent}
            selectedEvents={selectedEvents}
            onRepopulateEvent={onRepopulateEvent}
            limitReached={limitReached}
            isEventTimeConflict={isEventTimeConflict}
          />
          <SelectedEvents
            selectedEvents={selectedEvents}
            onDeselectEvent={handleDeselectEvent}
            onRepopulateEvent={onRepopulateEvent}
          />
        </div>
      )}
    </ErrorBoundary>
  );
};

export default App;
