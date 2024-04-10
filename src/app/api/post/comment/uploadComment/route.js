import connectToDb from "@/configs/db";
import Me from "@/utils/me";
import commentModel from "@/models/comment";

export async function POST(req) {
  try {
    connectToDb();
    const user = await Me();
    const { text, post } = await req.json();



   await commentModel.create({
      commenter: user._id,
      post,
      text,
    })

    return Response.json(
      { message: "send comment successfully" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { message: "Internal Server Error" },
      { status: 500, error }
    );
  }
}
