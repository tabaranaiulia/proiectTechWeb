const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Login = sequelize.define("login", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: DataTypes.STRING,
  password: DataTypes.STRING,
});

module.exports = Login;
