require("dotenv").config();
const router = require("express").Router();
const client = require("../../config/database");
const database = process.env.MDB_NAME;

const postUserController = async (req, res, next) => {
  try {
    if (req.body.username.length < 8) {
      const error = new Error("Username must be at least 8 characters");
      return next(error);
    }

    await client.connect();
    const userCollection = client.db(database).collection("users");
    const response = await userCollection.insertOne(req.body);
    res.send({
      status: "SUCCESS",
      message: "New data successfully created",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

router.post("/", postUserController);

module.exports = router;
