const Product = require("./Product");
const User = require("./User");

let defaultProducts = [
  new Product(
    1,
    1,
    "rosie",
    "leguma",
    "10.12.2022",
    new User(1, "alex", "vegetarian", null),
    false
  ),
  new Product(1, 1, "carne", "animal", "10.12.2022", null, false),
  new Product(
    1,
    1,
    "rosie",
    "leguma",
    "10.12.2022",
    new User(1, "alex", "vegetarian", null),
    true
  ),
  new Product(
    1,
    1,
    "rosie",
    "leguma",
    "10.12.2022",
    new User(1, "alex", "vegetarian", null),
    false
  ),
];

let users = [new User(1, "alex", "carnivor", defaultProducts)];

module.exports = {
  defaultProducts,
  users,
};
