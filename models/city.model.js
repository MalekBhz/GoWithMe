const mongoose = require("mongoose");
const City = mongoose.model(
  "City",
  new mongoose.Schema({
    name: String,
    population: String,
    country: String,
    cityId: String,
    location: String,
  })
);
module.exports = City;
