const mongoose = require("mongoose");
const { Schema } = mongoose;
require("./users");
require("@/models/post");

const schema = new Schema(
  {
    postImage: {
      type: String,
      required: true,
    },
    content: { type: String, required: false },
    user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    likes: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        commenter: {
          type: mongoose.Types.ObjectId,
          ref: "User",
          required: true,
        },
        post: {
          type: mongoose.Types.ObjectId,
          ref: "Post",
          required: true,
        },
        text: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timeStamps: true,
  }
);

const model = mongoose.models?.Post || mongoose.model("Post", schema);

export default model;
