const mongoose = require("mongoose");

function connectToDb() {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      mongoose.connect("mongodb://localhost:27017/mas-chat");
      console.log("connect to database successfully");
    }
  } catch (error) {
    console.log("don`t connect to database", error);
  }
}

export default connectToDb;
