const mongoose = require("mongoose");

function connectToDb() {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      mongoose.connect(
        "mongodb://root:M6OftCkxKGFU7l82zlnO2D2m@annapurna.liara.cloud:31867/my-app?authSource=admin"
      );
    }
  } catch (error) {
    return Response.json({ message: "don`t connect to database", error });
  }
}

export default connectToDb;
