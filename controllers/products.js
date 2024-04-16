const Product = require("../models/products");
const getAllProducts = async (req, res) => {
  const { company } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = company;
  }
  const Data = await Product.find(queryObject);
  res.status(200).json({ Data });
};

const getAllProductsTesting = async (req, res) => {
  const Data = await Product.find(req.query);
  console.log("Products are fetched successfully", req.query);
  res.status(200).json({ Data });
};

module.exports = { getAllProducts, getAllProductsTesting };
