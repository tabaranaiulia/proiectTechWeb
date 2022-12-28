const express = require("express");
const { users } = require("../database");
const User = require("../User");

const userRouter = express.Router();

const checkUserId = (req, res, next) => {
  if (users.filter((x) => x.id == req.params.userId).length === 0) {
    res.status(404).json({ message: "User not found" });
  } else next();
};

userRouter
  .get("/allUsers", (req, res) => {
    let categoryUsers = users;
    if (req.query.category) {
      categoryUsers = users.filter((x) => x.category == req.query.category);
    }
    res.status(200).json(categoryUsers);
  })
  .post("/addUser", (req, res) => {
    if (
      !req.body.hasOwnProperty("username") ||
      !req.body.hasOwnProperty("category")
    ) {
      res.status(400).json({ message: "Wrong request" });
    } else {
      let idMax = users.reduce(function (prev, current) {
        return prev.id > current.id ? prev : current;
      }).id;

      let user = new User(
        idMax + 1,
        req.body.username,
        req.body.category,
        null
      );
      users.push(user);
      res.status(200).json({ added: "ok", id: idMax + 1 });
    }
  })
  .put("/changeCategory/:userId", checkUserId, (req, res) => {
    if (!req.body.hasOwnProperty("category")) {
      res.status(400).json({ message: "New category cannot be null" });
    } else {
      users.find((x) => x.id == req.params.userId).category = req.body.category;
      res.status(200).json(users.find((x) => x.id == req.params.userId));
    }
  });

module.exports = userRouter;
