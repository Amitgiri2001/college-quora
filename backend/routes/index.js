const express = require("express");
const router = express.Router();

const questionRouter = require("./Question");
const answerRouter = require("./Answer");
const registerRouter=require("./Register")

router.get("/", (req, res) => {
  res.send("This api is reserved for quora clone");
});

router.use("/questions", questionRouter);
router.use("/answers", answerRouter);
router.use("/register", registerRouter);

module.exports = router;
