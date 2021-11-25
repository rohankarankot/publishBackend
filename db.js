const mongoose = require("mongoose");
const mongoUrI =
   "mongodb+srv://rohan:karankot@cluster0.iciop.mongodb.net/mpm-backend?retryWrites=true&w=majority";

const connectToMongoose = () => {
  mongoose.connect(mongoUrI, () => {
    console.log("Connected to Mongo successfully");
  });
};

module.exports = connectToMongoose;
