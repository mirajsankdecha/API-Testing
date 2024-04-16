require("dotenv").config();
const connectDB = require("./db/connect");
const products = require("./models/products");
const Products = require("./models/products");
const Product_JSON = require("./products.json");
const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await products.deleteMany();
        await Products.create(Product_JSON);
        console.log("Data Inserted Successfully");
    } catch (error) {
       console.log(error); 
    }
};

start();