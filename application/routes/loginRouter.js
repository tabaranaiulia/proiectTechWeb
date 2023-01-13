const express = require("express");
const Login = require("../models/Login");

const loginRouter = express.Router();

loginRouter
  .get("/allUsers", async (req, res, next) => {
    try {
      const allUsers = await Login.findAll();
      res.status(200).json(allUsers);
    } catch (error) {
      next(error);
    }
  })
  .post("/addUser", async (req, res, next) => {
    try {
      await Login.create(req.body);
      res.status(201).json({ message: "login created" });
    } catch (error) {
      next(error);
    }
  });

module.exports = loginRouter;
