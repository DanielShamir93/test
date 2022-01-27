const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_URL = 'mongodb://localhost:27017/1K4A-Password';

if (process.env.NODE_ENV === "production") {
  MONGODB_URL = process.env.MONGODB_URL;
}

mongoose.connect(
  MONGODB_URL, 
  () => {
    console.log("mongoDB connected");
  },
  (e) => console.error(e)
);