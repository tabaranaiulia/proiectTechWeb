const express = require("express");
const { users } = require("../database");
const Product = require("../models/Product");
const User = require("../models/User");

const userRouter = express.Router();

userRouter
  .get("/allUsers", async (req, res, next) => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  })
  .get("/:userId/products", async (req, res, next) => {
    const user = await User.findByPk(req.params.userId, {
      include: [Product],
    });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  })
  .post("/addUser", async (req, res, next) => {
    try {
      await User.create(req.body);
      res.status(201).json({ message: "User created" });
    } catch (error) {
      next(error);
    }
  })
  .put("/changeCategory/:userId", async (req, res) => {
    try {
      const user = await User.findByPk(req.params.userId);
      if (user) {
        const updatedUser = await user.update(req.body);
        res.status(200).json(updatedUser);
      } else {
        res.status(404).json({ message: "user not found" });
      }
    } catch (error) {
      next(error);
    }
  });

module.exports = userRouter;
