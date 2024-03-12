const e = require("express");
const eventRepository = require("../repository/eventRepository");

const app = require("express")();

const PORT = 8080;

app.get("/api", async (req, res) => {
  let events = await eventRepository.getAllEvents();
  events = events.map(e => {
    let id = e._id;
    delete e._id;
    return {
      ...e,
      id: id
    }
  })
  res.json(events);
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
