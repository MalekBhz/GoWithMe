const mongoose = require("mongoose");
const Forum = mongoose.model(
  "Forum",
  new mongoose.Schema({
    userId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    title: String,
    data: {
      post: String,
      comments: {
        comment: String,
        writer: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
          },
        ],
      },
    },
  })
);
module.exports = Forum;
