require("dotenv").config();
const router = require("express").Router();
const client = require("../../config/database");
const database = process.env.MDB_NAME;

router.post("/", async (req, res) => {
  try {
    await client.connect();
    const userCollection = client.db(database).collection("users");
    const result = await userCollection.insertOne(req.body);
    res.send({ result });
  } catch (error) {
    console.log({ error });
  }
});

module.exports = router;
