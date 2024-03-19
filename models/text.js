const mongoose = require("mongoose");
import userModel from '../models/users'

const schema = mongoose.Schema(
  {
    text: {
      type: String,
      require: true,
    },

    sender: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      require: true,
    },
    receiver: {
      type: String,
      require: true,
    },
  },
  {
    timeStamps: true,
  }
);

const model = mongoose.models.Text || mongoose.model("Text", schema);

export default model;
