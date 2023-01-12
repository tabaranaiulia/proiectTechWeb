const { urlencoded } = require("express");
const express = require("express");
const sequelize = require("./sequelize");

const productRouter = require("./routes/ProductRouter");
const userRouter = require("./routes/userRouter");
const Product = require("./models/Product");
const User = require("./models/User");

const app = express();
app.use(urlencoded({ extended: true }));
app.use(express.json());

//sync database
app.get("/create", async (req, res, next) => {
  try {
    await sequelize.sync({ force: true }).then(() => {
      console.log("Models syncronized");
      res.status(200).json({ message: "Database created" });
    });
  } catch (err) {
    next(err);
  }
});

//add database relationships
User.hasMany(Product, {
  foreignKey: "UserId",
});

Product.belongsTo(User, {
  foreignKey: "claimedUserId",
  as: "claimedUser",
});
// User.hasMany(Product, {
//   foreignKey: "claimedUserId",
//   as: "ClaimedUser",
// });

//app routes
app.use("/products", productRouter);
app.use("/users", userRouter);

module.exports = app;
