const mongoose = require("mongoose");
const { Schema } = mongoose;
require("./users");
require("./post");

const schema = new Schema({
  user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  post: { type: mongoose.Types.ObjectId, ref: "post", required: true },
});

const model = mongoose.models?.Favorite || mongoose.model("Favorite", schema);

export default model;
