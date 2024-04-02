const { default: connectToDb } = require("../../../../../configs/db");
import userModel from "../../../../../models/users";

export async function GET(req,{params}) {
  try {
    const { id } = params;
    connectToDb();
    const user = await userModel.findOne({ _id: id });
    if (user) {
      return Response.json(user);
    }
    return Response.json({ message: "user not find", status: 404 });
  } catch (error) {
    return Response.json(
      { message: "Internal Server Error" },
      { status: 500, error }
    );
  }
}
