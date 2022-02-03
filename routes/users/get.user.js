require("dotenv").config();
const router = require("express").Router();
const client = require("../../config/database");

router.get("/", async (req, res) => {
  try {
    await client.connect();

    const userCollection = client.db(process.env.MDB_NAME).collection("users");
    const result = await userCollection.find().toArray();

    client.close();

    res.send({ result });
  } catch (error) {
    console.log({ error });
  }
});

module.exports = router;
