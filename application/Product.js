const User = require("./User");

class Product {
  constructor(id, idUser, name, category, expireDate, claimedUser, available) {
    this.id = id;
    this.idUser = idUser;
    this.name = name;
    this.category = category;
    this.expireDate = expireDate;
    this.claimedUser = claimedUser;
    this.available = available;
  }
}

module.exports = Product;
