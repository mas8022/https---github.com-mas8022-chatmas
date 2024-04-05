const mongoose = require("mongoose");
const userModel = require('@/../models/users');

const schema = mongoose.Schema(
  {
    image: {
      type: String,
      require: true,
    },
    content: { type: String, require: false },
    user: { type: mongoose.Types.ObjectId, ref: "User", require: true },
  }
);

const model = mongoose.models.Post || mongoose.model("Post", schema);

export default model;
