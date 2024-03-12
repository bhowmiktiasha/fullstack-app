const database = require("../config/database");

const EVENTS_COLLECTION = "events";

const eventRepository = {
  getAllEvents: async () => {
    try {
      const events = await database.db.collection(EVENTS_COLLECTION).find().toArray();
      return events;
    } catch (error) {
      console.error("Error fetching events:", error);
      throw error;
    }
  },
};

module.exports = eventRepository;
