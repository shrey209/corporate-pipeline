require("dotenv").config();
const mongoose = require("mongoose");

const URI = process.env.MONGO_URI;

const connectionSetup = (Port) => {
  return mongoose.connect(URI);
};

module.exports = { connectionSetup };
