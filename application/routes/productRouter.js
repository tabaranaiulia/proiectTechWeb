const express = require("express");
const Product = require("../models/Product");
const User = require("../models/User");

const productRouter = express.Router();

productRouter
  .get("/allProducts", async (req, res, next) => {
    try {
      const products = await Product.findAll();
      res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  })
  .get("/:productId", async (req, res, next) => {
    try {
      const product = await Product.findByPk(req.params.productId);
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: "product not found" });
      }
    } catch (error) {
      next(error);
    }
  })
  .post("/:UserId/addProduct", async (req, res, next) => {
    try {
      const user = await User.findByPk(req.params.UserId);
      if (user) {
        const product = new Product(req.body);
        product.UserId = user.id;
        await product.save();
        res.status(201).json({ message: "Product added" });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      next(error);
    }
  })
  .put("/changeAvailability/:productId", async (req, res, next) => {
    try {
      const product = await Product.findByPk(req.params.productId);
      if (product) {
        const updatedProduct = await product.update(req.body);
        res.status(200).json(updatedProduct);
      } else {
        res.status(404).json({ message: "product not found" });
      }
    } catch (error) {
      next(error);
    }
  })
  .put("/:productId", async (req, res, next) => {
    try {
      const product = await Product.findByPk(req.params.productId);
      if (product) {
        const updatedProduct = await product.update(req.body);
        res.status(200).json(updatedProduct);
      } else {
        res.status(404).json({ message: "product not found" });
      }
    } catch (error) {
      next(error);
    }
  });

module.exports = productRouter;
