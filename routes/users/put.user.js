require("dotenv").config();
const router = require("express").Router();
const { ObjectId } = require("mongodb");
const client = require("../../config/database");
const database = process.env.MDB_NAME;

const updateUserController = async (req, res, next) => {
  try {
    await client.connect();

    const userCollection = client.db(database).collection("users");
    const result = await userCollection.updateOne(
      { _id: ObjectId(req.params.userid) },
      { $set: req.body }
    );

    client.close();

    res.send({
      status: "SUCCESS",
      message: "Update user successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

router.put("/:userid", updateUserController);

module.exports = router;
