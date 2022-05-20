const mongoose = require("mongoose");
const Transport = mongoose.model(
  "Transport",
  new mongoose.Schema({
    type: String,
    name: String,
  })
);
module.exports = Transport;
