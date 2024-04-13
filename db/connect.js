const mongoose = require("mongoose");

uri =
    "mongodb+srv://mirajsankdecha:Miraj123@mongo.ks9wvwp.mongodb.net/ecom?retryWrites=true&w=majority&appName=Mongo";
  
const connectDB = () => {
    return mongoose.connect(uri);
};

module.exports = connectDB;