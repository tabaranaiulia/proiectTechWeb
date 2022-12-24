const Product = require("./Product");
const User = require("./User");

let defaultProducts = [
  new Product(1, 1, "rosie", "leguma", "10.12.2022", null, false),
  new Product(2, 2, "carne", "animal", "10.12.2022", null, false),
  new Product(3, 2, "rosie", "leguma", "10.12.2022", null, true),
  new Product(4, 1, "rosie", "leguma", "10.12.2022", null, false),
];

let users = [
  new User(
    1,
    "alex",
    "Carnivor",
    defaultProducts.filter((x) => x.idOwner == 1)
  ),
  new User(2, "alex2", "Vegetarian", defaultProducts),
  new User(3, "alex3", "Zacuscar", defaultProducts),
  new User(4, "alex4", "carnivor", defaultProducts),
];

module.exports = {
  defaultProducts,
  users,
};
