const mongoose = require("mongoose");
const Step = mongoose.model(
  "Step",
  new mongoose.Schema({
    userId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    departureCityId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "City",
      },
    ],
    arrivalCityId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "City",
      },
    ],
    nbPassengers: String,
    transportId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transport",
      },
    ],
    departureDate: Date,
    arrivalDate: Date,
  })
);
module.exports = Step;
