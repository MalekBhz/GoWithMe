const mongoose = require("mongoose");
const ActivityType = mongoose.model(
  "ActivityType",
  new mongoose.Schema({
    name: String,
  })
);
module.exports = ActivityType;
