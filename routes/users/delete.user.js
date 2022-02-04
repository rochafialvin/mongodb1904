require("dotenv").config();
const router = require("express").Router();
const { ObjectId } = require("mongodb");
const client = require("../../config/database");
const database = process.env.MDB_NAME;

const deleteUserController = async (req, res, next) => {
  try {
    await client.connect();

    const userCollection = client.db(database).collection("users");
    const result = await userCollection.deleteOne({
      _id: ObjectId(req.params.userid),
    });

    client.close();

    res.send({
      status: "SUCCESS",
      message: "User has been deleted",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

router.delete("/:userid", deleteUserController);

module.exports = router;
