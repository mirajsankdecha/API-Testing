const Product = require("../models/products");
const getAllProducts = async (req, res) => {
  const { company, name, featured, sort ,select } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (featured) {
    queryObject.featured = featured;
  }
  let apiData = Product.find(queryObject);

  if (sort) {
    let sortFix = sort.replace(",", " ");
    apiData = apiData.sort(sortFix);
  }
  
  if (select) {
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  const Data = await apiData;
  res.status(200).json({ Data });
};

const getAllProductsTesting = async (req, res) => {
  const Data = await Product.find(req.query).select("name");
  console.log("Products are fetched successfully", req.query);
  res.status(200).json({ Data });
};

module.exports = { getAllProducts, getAllProductsTesting };
