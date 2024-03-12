const MONGO_URI =
  "mongodb+srv://tbhojai:x9wJxRUYXgs3HhMl@fullstack-db.iifdcuk.mongodb.net/?retryWrites=true&w=majority&appName=fullstack-db";
const DB_NAME = "sports";

const { MongoClient } = require("mongodb");

class Database {
  constructor() {
    this.client = new MongoClient(MONGO_URI);

    this.connect()
  }

  async connect() {
    await this.client.connect();
    console.log("Connected successfully to MongoDB");
    this.db = this.client.db(DB_NAME);
  }
}

module.exports = new Database();