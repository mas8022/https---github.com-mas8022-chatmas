const mongoose = require("mongoose");
import userModel from "../models/users";

const schema = new mongoose.Schema(
  {
    postImage: {
      type: String,
      required: true,
    },
    content: { type: String },
    user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timeStamps: true,
  }
);

const model = mongoose.models.Post || mongoose.model("Post", schema);

export default model;
