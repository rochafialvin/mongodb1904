const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://root:Mongodb123@cluster0.wouod.mongodb.net/mongodb1904?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = client;
