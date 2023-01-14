const app = require("./app");
const sequelize = require("./sequelize");
const cors = require("cors");
const port = 8080;

app.listen(port, async () => {
  console.log("App running on port: " + port);
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Connection established succesfully");
  } catch (err) {
    console.error("Unable to connect " + err);
  }
});
