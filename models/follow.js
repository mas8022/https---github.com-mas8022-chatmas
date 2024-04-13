const mongoose = require("mongoose");
require("./users");

const schema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  following: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const model = mongoose.models.Follow || mongoose.model("Follow", schema);

export default model;
