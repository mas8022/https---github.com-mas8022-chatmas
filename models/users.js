const mongoose = require("mongoose");

const schema = mongoose?.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: { type: String, required: true },
  email: { type: String, required: true },
  profileImage: { type: String },
  phone: { type: Number, required: true },
});

const model = mongoose.models?.User || mongoose?.model("User", schema);

export default model;
