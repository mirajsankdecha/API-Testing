const Product = require("../models/products");
const getAllProducts = async (req, res) => {
  const Data = await Product.find({});
  res.status(200).json({ Data });
};

const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ message: "Get All Products Testing" });
};

module.exports = { getAllProducts, getAllProductsTesting };
