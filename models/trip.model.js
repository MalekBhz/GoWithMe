const mongoose = require("mongoose");
const Trip = mongoose.model(
  "Trip",
  new mongoose.Schema({
    StepId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Step",
      },
    ],
  })
);
module.exports = Trip;
