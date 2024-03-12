const MONGO_URI =
  "mongodb+srv://tbhojai:x9wJxRUYXgs3HhMl@fullstack-db.iifdcuk.mongodb.net/?retryWrites=true&w=majority&appName=fullstack-db";
const DB_NAME = "sports";

const EVENTS_COLLECTION = "events";

const { MongoClient } = require("mongodb");

const client = new MongoClient(MONGO_URI);

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(DB_NAME);
  const eventsCollection = db.collection(EVENTS_COLLECTION);

  const events = await eventsCollection.find({}).toArray();
  console.log("Found events =>", events);
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
