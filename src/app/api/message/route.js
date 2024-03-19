const { default: connectToDb } = require("../../../../configs/db");
import messageModel from "../../../../models/text";
export async function POST(req) {
  try {
    connectToDb();
    const { text, receiveID } = await req.json();

    await messageModel.create({ text, receiveID });

    return Response.json(
      { message: "send message successfully" },
      { status: 201 }
    );
} catch (error) {
      console.log("run");
    return Response.json(
      { message: "Internal Server Error" },
      { status: 500, error }
    );
  }
}
