const { default: connectToDb } = require("../../../../configs/db");
import messageStartModel from "../../../../models/messageStart";

export async function POST(req) {
  try {
    connectToDb();
    const { from, to, text } = await req.json();


    console.log("message data ==>",{ from, to, text });

    await messageStartModel.create({ from, to, text });

    return Response.json(
      { message: "send message successfully" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { message: "Internal Server Error" },
      { status: 500, error }
    );
  }
}
