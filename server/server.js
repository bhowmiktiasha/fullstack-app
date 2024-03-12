const app = require("express")();

const PORT = 8080;

app.get("/api", (req, res) => {
  res.json({
    mockEvents: [
      {
        id: 1,
        event_name: "Butterfly 100M",
        event_category: "Swimming",
        start_time: "2022-12-17 13:30:00",
        end_time: "2022-12-17 14:30:00",
      },
      {
        id: 2,
        event_name: "Backstroke 100M",
        event_category: "Swimming",
        start_time: "2022-12-17 13:00:00",
        end_time: "2022-12-17 14:00:00",
      },
      {
        id: 3,
        event_name: "Freestyle 400M",
        event_category: "Swimming",
        start_time: "2022-12-17 15:00:00",
        end_time: "2022-12-17 16:00:00",
      },
      {
        id: 4,
        event_name: "High Jump",
        event_category: "Athletics",
        start_time: "2022-12-17 13:00:00",
        end_time: "2022-12-17 14:00:00",
      },
      {
        id: 5,
        event_name: "Triple Jump",
        event_category: "Athletics",
        start_time: "2022-12-17 16:00:00",
        end_time: "2022-12-17 17:00:00",
      },
      {
        id: 6,
        event_name: "Long Jump",
        event_category: "Athletics",
        start_time: "2022-12-17 17:00:00",
        end_time: "2022-12-17 18:00:00",
      },
      {
        _id: 7,
        event_name: "100M Sprint",
        event_category: "Athletics",
        start_time: "2022-12-17 17:00:00",
        end_time: "2022-12-17 18:00:00",
      },
      {
        _id: 8,
        event_name: "Lightweight 60kg",
        event_category: "Boxing",
        start_time: "2022-12-17 18:00:00",
        end_time: "2022-12-17 19:00:00",
      },
      {
        _id: 9,
        event_name: "Middleweight 75 kg",
        event_category: "Boxing",
        start_time: "2022-12-17 19:00:00",
        end_time: "2022-12-17 20:00:00",
      },
      {
        _id: 10,
        event_name: "Heavyweight 91kg",
        event_category: "Boxing",
        start_time: "2022-12-17 20:00:00",
        end_time: "2022-12-17 22:00:00",
      },
    ],
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const app = require("express")();

// const PORT = 8080;

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
