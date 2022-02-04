const router = require("express").Router();

const getUserRouter = require("./get.user");
const postUserRouter = require("./post.user");
const putUserRouter = require("./put.user");
const deleteUserRouter = require("./delete.user");

router.use(getUserRouter);
router.use(postUserRouter);
router.use(putUserRouter);
router.use(deleteUserRouter);

module.exports = router;
