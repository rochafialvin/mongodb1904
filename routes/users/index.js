const router = require("express").Router();

const getUserRouter = require("./get.user");

router.use(getUserRouter);

module.exports = router;
