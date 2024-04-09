const mongoose = require("mongoose");
require("./users");

const schema = mongoose.Schema(
  {
    from: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    to: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  {
    timeStamps: true,
  }
);

const model = mongoose.models.MessageStart || mongoose.model("MessageStart", schema);

export default model;
