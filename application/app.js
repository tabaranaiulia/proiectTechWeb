const { urlencoded } = require("express");
const express = require("express");
const { users } = require("./database");
const testRouter = require("./routes/testRoutes");

const app = express();
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", testRouter);

app.get("/getTest", (req, res) => {
  res.send("Get works");
});

module.exports = app;
