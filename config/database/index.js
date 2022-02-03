require("dotenv").config();
const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MDB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = client;
