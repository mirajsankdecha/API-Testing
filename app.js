const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./db/connect");
const PORT = process.env.PORT || 5000;
const products_routes = require("./routes/products");

app.get("/", (req, res) => {
  res.send("Hii API is Live!");
});

app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1); // Exit with failure
  }
};

start();
