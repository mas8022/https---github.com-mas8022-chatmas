const mongoose = require("mongoose");

function connectToDb() {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      mongoose.connect(
        "mongodb://root:UiGC1yuwQGhWZch36Plgg1Xr@eiger.liara.cloud:33956/my-app?authSource=admin"
      );
    }
  } catch (error) {
    return Response.json({ message: "don`t connect to database", error });
  }
}

export default connectToDb;
