const express = require("express");
const { users, defaultProducts } = require("../database");
const Product = require("../Product");

const productRouter = express.Router();

const checkProductId = (req, res, next) => {
  if (
    defaultProducts.filter((x) => x.id == req.params.productId).length === 0
  ) {
    res.status(404).json({ message: "Product not found" });
  } else next();
};

productRouter
  .get("/allProducts", (req, res) => {
    let categoryProducts = defaultProducts;
    if (req.query.category) {
      categoryProducts = defaultProducts.filter(
        (x) => x.category == req.query.category
      );
    }
    res.status(200).json(categoryProducts);
  })
  .get("/product/:productId", checkProductId, (req, res) => {
    res
      .status(200)
      .json(defaultProducts.filter((x) => x.id == req.params.productId));
  })
  .post("/addProduct", (req, res) => {
    if (
      (!req.body.hasOwnProperty("idOwner") ||
        !req.body.hasOwnProperty("name") ||
        !req.body.hasOwnProperty("category") ||
        !req.body.hasOwnProperty("price") ||
        !req.body.hasOwnProperty("expireDate") ||
        !req.body.hasOwnProperty("claimedUserId"),
      !req.body.hasOwnProperty("available"))
    ) {
      res.status(400).json({ message: "Wrong request" });
    } else {
      let idMax = defaultProducts.reduce(function (prev, current) {
        return prev.id > current.id ? prev : current;
      }).id;

      let product = new Product(
        idMax + 1,
        req.body.idOwner,
        req.body.name,
        req.body.category,
        req.body.price,
        req.body.expireDate,
        req.body.claimedUserId,
        req.body.availbale
      );
      defaultProducts.push(product);
      res.status(200).json({ added: "ok", id: idMax + 1 });
    }
  })
  .put("/changeAvailability/:productId", checkProductId, (req, res) => {
    defaultProducts.find((x) => x.id == req.params.productId).available =
      defaultProducts.find((x) => x.id == req.params.productId).available
        ? false
        : true;

    res
      .status(200)
      .json(defaultProducts.find((x) => x.id == req.params.productId));
  })
  .put("/addClaimedUser/:productId", checkProductId, (req, res) => {
    if (!req.body.hasOwnProperty("claimedUserId")) {
      res.status(400).json({ message: "bad request" });
    } else {
      if (users.find((x) => x.id == req.body.claimedUserId) == null) {
        res.status(404).json({ message: "User not found" });
      } else {
        defaultProducts.find(
          (x) => x.id == req.params.productId
        ).claimedUserId = req.body.claimedUserId;
        res.status(200).json(users.find((x) => x.id == req.body.claimedUserId));
      }
    }
  });

module.exports = productRouter;
