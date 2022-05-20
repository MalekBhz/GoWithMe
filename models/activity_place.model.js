const mongoose = require("mongoose");
const ActivityPlace = mongoose.model(
  "ActivityPlace",
  new mongoose.Schema({
    name: String,
    address: String,
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ActivityType",
      },
    ],
    price: Float32Array,
  })
);
module.exports = ActivityPlace;
