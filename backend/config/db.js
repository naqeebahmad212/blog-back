const mongoose = require(`mongoose`);
const express = require(`express`);
const app = express();
const URI =
  "mongodb://soomrush212:ahmadjan1@ac-ux15x8w-shard-00-00.i0gyfov.mongodb.net:27017,ac-ux15x8w-shard-00-01.i0gyfov.mongodb.net:27017,ac-ux15x8w-shard-00-02.i0gyfov.mongodb.net:27017/mern-blo?ssl=true&replicaSet=atlas-v26p2r-shard-0&authSource=admin&retryWrites=true&w=majority";

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
