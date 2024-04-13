const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getAllProductsTesting,
} = require("../controllers/products");
router.get("/",getAllProducts);
router.get("/test",getAllProductsTesting);

module.exports = router;
