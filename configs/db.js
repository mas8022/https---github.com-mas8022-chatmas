const mongoose = require("mongoose");

function connectToDb() {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      mongoose.connect(
        "mongodb://root:yNfEopgknnUiNDwtV0Tq1Iv4@annapurna.liara.cloud:32755/my-app?authSource=admin"
      );
    }
  } catch (error) {
    return Response.json({ message: "don`t connect to database", error });
  }
}

export default connectToDb;
