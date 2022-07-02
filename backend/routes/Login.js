const express = require("express");
const router = express.Router();

const loginDB = require("../models/Login");

router.post("/login", async (req, res) => {
  try {
    await loginDB
      .create({
        userName: req.body.userName,
        password: req.body.password,
      })
      .then(() => {
        res.status(201).send({
          status: true,
          message: "Answer added successfully",
        });
      })
      .catch((e) => {
        res.status(400).send({
          status: false,
          message: "Bad request",
        });
      });
  } catch (e) {
    res.status(500).send({
      status: false,
      message: "Error while adding answer",
    });
  }
});

module.exports = router;
