const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: DataTypes.STRING,
  category: DataTypes.STRING,
  image: DataTypes.STRING,
});

module.exports = User;
