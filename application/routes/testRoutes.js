const express = require("express");
const { users } = require("../database");
const testRouter = express.Router();

testRouter.get("/getUsersRouter", (req, res) => {
  res.status(201).json(users);
});

module.exports = testRouter;
