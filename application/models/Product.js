const User = require("./User");
const sequelize = require("../sequelize");
const { DataTypes, BelongsTo } = require("sequelize");

const Product = sequelize.define("product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  category: DataTypes.STRING,
  price: DataTypes.FLOAT,
  expireDate: DataTypes.STRING,
  available: DataTypes.BOOLEAN,
});

// class Product {
//   constructor(
//     id,
//     idOwner,
//     name,
//     category,
//     price,
//     expireDate,
//     claimedUserId,
//     available
//   ) {
//     this.id = id;
//     this.idOwner = idOwner;
//     this.name = name;
//     this.category = category;
//     this.price = price;
//     this.expireDate = expireDate;
//     this.claimedUserId = claimedUserId;
//     this.available = available;
//   }
// }

module.exports = Product;
