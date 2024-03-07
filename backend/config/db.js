const mongoose = require(`mongoose`);
const express = require(`express`);
const app = express();
const URI =
  "mongodb+srv://soomrush212:ahmadjan1@my-cluster.i0gyfov.mongodb.net/y-app?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    mongoose.set(`strictQuery`, false);
    await mongoose.connect(URI);
    console.log("database connected");
  } catch (err) {
    consol.log(err);
  }
};

module.exports = connectDB;
