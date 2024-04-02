const { default: connectToDb } = require("../../../../configs/db");
import userModel from "../../../../models/users";

export async function GET() {
  try {
    connectToDb();
    const users = await userModel.find({});
    if (users.length) {
      return Response.json(users);
    } else {
      return Response.json({ message: "dont have any users", status: 404 });
    }
  } catch (error) {
    return Response.json(
      { message: "Internal Server Error" },
      { status: 500, error }
    );
  }
}
