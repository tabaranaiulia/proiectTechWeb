const { urlencoded } = require("express");
const express = require("express");
const { users } = require("./database");
const productRouter = require("./routes/ProductRouter");

const app = express();
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use("/products", productRouter);

app.get("/getTest", (req, res) => {
  res.send("Get works");
});

module.exports = app;
