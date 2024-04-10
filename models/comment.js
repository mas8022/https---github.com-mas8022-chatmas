const mongoose = require("mongoose");
const { Schema } = mongoose;
require("@/models/users");
require("@/models/post");

const schema = new Schema(
  {
    commenter: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    post: { type: mongoose.Types.ObjectId, ref: "Post", required: true },
    text: { type: String, required: true },
    like: {
      type: Number,
      required: true,
      default: 0,
    },
    disLike: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.models?.Comment || mongoose.model("Comment", schema);

export default model;
