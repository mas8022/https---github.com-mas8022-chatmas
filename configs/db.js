const mongoose = require("mongoose");

function connectToDb() {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      mongoose.connect("mongodb://localhost:27017/mas-chat");

    }
  } catch (error) {
    return Response.json({message: "don`t connect to database", error})
  }
}

export default connectToDb;
