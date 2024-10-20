const mongoose = require("mongoose");

function connectToDb() {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      mongoose.connect(
        "mongodb://root:DZvr0vZAfd81qjczwngyO0LI@lhotse.liara.cloud:31341/my-app?authSource=admin&replicaSet=rs0&directConnection=true"
      );
    }
  } catch (error) {
    return Response.json({ message: "don`t connect to database", error });
  }
}

export default connectToDb;
