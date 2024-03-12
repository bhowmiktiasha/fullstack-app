// import { createContext, useContext, useState } from "react";

// import HomePage from "./pages/HomePage";

// const SelectedEventsContext = createContext();

// export const useSelectedEvents = () => {
//   return useContext(SelectedEventsContext);
// };

// export const SelectedEventsProvider = ({ children }) => {
//   const [selectedEvents, setSelectedEvents] = useState([]);

//   const isEventTimeConflict = (event) => {
//     return selectedEvents.some(
//       (selectedEvent) =>
//         (event.start_time >= selectedEvent.start_time &&
//           event.start_time <= selectedEvent.end_time) ||
//         (event.end_time >= selectedEvent.start_time &&
//           event.end_time <= selectedEvent.end_time)
//     );
//   };

//   // Update selected events
//   const handleSelectEvent = (event) => {
//     // setSelectedEvents((prevSelectedEvents) => [...prevSelectedEvents, event]);
//     if (selectedEvents.length < 3 && !isEventTimeConflict(event)) {
//       const updatedSelectedEvents = [...selectedEvents, event];
//       setSelectedEvents(updatedSelectedEvents);
//     }
//   };

//   // Deselect event
//   const handleDeselectEvent = (eventId) => {
//     const updatedSelectedEvents = selectedEvents.filter(
//       (event) => event.id !== eventId
//     );
//     setSelectedEvents(updatedSelectedEvents);
//     // setSelectedEvents((prevSelectedEvents) =>
//     //   prevSelectedEvents.filter((event) => event.id !== eventId)
//     // );
//   };

//   return (
//     <SelectedEventsContext.Provider
//       value={{
//         selectedEvents,
//         handleSelectEvent,
//         handleDeselectEvent,
//         setSelectedEvents,
//       }}
//     >
//       {children}
//     </SelectedEventsContext.Provider>
//   );
// };




  //   const {
  //     selectedEvents,
  //     handleSelectEvent,
  //     handleDeselectEvent,
  //     setSelectedEvents,
  //   } = useSelectedEvents();
//   add in HomePage
// import { useSelectedEvents } from "../SelectedEventsContext"; in home
// import { SelectedEventsProvider } from "./SelectedEventsContext"; in app.js
// then wrap with SelectedEventsProvider  inside routes