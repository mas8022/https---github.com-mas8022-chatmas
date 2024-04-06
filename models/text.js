const mongoose = require("mongoose");
import userModel from '../models/users'

const schema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },

    sender: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiver: {
      type: String,
      required: true,
    },
  },
  {
    timeStamps: true,
  }
);

const model = mongoose.models.Text || mongoose.model("Text", schema);

export default model;
