const mongoose = require("mongoose");

const schema = mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  password: { type: String, require: true, maxLength: 15, minLength: 5 },
  email: { type: String, require: true },
  profileImage: { type: String },
});

const model = mongoose.models.Users || mongoose.model("User", schema);

export default model;
