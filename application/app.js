const { urlencoded } = require("express");
const express = require("express");
const sequelize = require("./sequelize");
const cors = require("cors");

const productRouter = require("./routes/ProductRouter");
const userRouter = require("./routes/userRouter");
const Product = require("./models/Product");
const User = require("./models/User");
const Login = require("./models/Login");
const loginRouter = require("./routes/loginRouter");

const app = express();
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

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

//login
// app.post("/login", async (req, res, next) => {
//   try {
//     const loginData = await Login.findAll();
//     //loginData.find((x) => x.username == req.body.username);
//     if (loginData) {
//       res.status(200).json(loginData);
//     }
//   } catch (error) {
//     next(error);
//   }
// });

//add database relationships
Login.belongsTo(User, {
  foreignKey: "UserId",
});

User.hasOne(Login, {
  foreignKey: "UserId",
});

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
app.use("/login", loginRouter);

module.exports = app;
