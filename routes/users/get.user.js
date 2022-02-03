require("dotenv").config();
const router = require("express").Router();
const client = require("../../config/database");

const getUserContoller = async (req, res, next) => {
  try {
    await client.connect();

    const userCollection = client.db(process.env.MDB_NAME).collection("users");
    const users = await userCollection.find().toArray();

    client.close();

    res.send({
      status: "SUCCESS",
      message: "Get all data success",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

router.get("/", getUserContoller);

module.exports = router;
