const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    userName: {
      type: String,
      require: true,
    },
    password: { type: String, require: true },
    email: { type: String, require: true },
    profileImage: { type: String },
    phone: { type: Number, require: true },
  },
  { timeStamps: true }
);

const model = mongoose.models.User || mongoose.model("User", schema);

export default model;
