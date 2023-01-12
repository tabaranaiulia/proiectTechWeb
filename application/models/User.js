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
});

// class User {
//   constructor(id, username, category, listProducts) {
//     this.id = id;
//     this.username = username;
//     this.category = category;
//     this.listProducts = listProducts;
//   }
// }

module.exports = User;
