const { default: connectToDb } = require("../../../../configs/db");
import userModel from "../../../../models/users";
export async function POST(req) {

  try {
    connectToDb();
    const body = await req.json();
    await userModel.create(body);
    Response.json({message: "user add to db successfully"})

  } catch (error) {
    Response.json({message: "Internal Server Error"}, {status: 500, error})
  }
  
}
