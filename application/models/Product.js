const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const Product = sequelize.define("product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  image: DataTypes.STRING,
  category: DataTypes.STRING,
  price: DataTypes.FLOAT,
  quantity: DataTypes.FLOAT,
  quantityType: DataTypes.STRING,
  expireDate: DataTypes.STRING,
  available: DataTypes.BOOLEAN,
});

module.exports = Product;
