const User = require("./User");

class Product {
  constructor(
    id,
    idOwner,
    name,
    category,
    price,
    expireDate,
    claimedUserId,
    available
  ) {
    this.id = id;
    this.idOwner = idOwner;
    this.name = name;
    this.category = category;
    this.price = price;
    this.expireDate = expireDate;
    this.claimedUserId = claimedUserId;
    this.available = available;
  }
}

module.exports = Product;
