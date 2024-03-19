const mongoose = require("mongoose");
import userModel from '../models/users'

const schema = mongoose.Schema(
  {
    text: {
      type: String,
      require: true,
    },

    send: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      require: true,
    },
    receiveID: {
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
