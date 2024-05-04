const mongoose = require("mongoose");

function connectToDb() {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      mongoose.connect(
        "mongodb://root:HZV9waVfz7s0G8HcaGaVoY8D@eiger.liara.cloud:33653/my-app?authSource=admin"
      );
    }
  } catch (error) {
    return Response.json({ message: "don`t connect to database", error });
  }
}

export default connectToDb;
