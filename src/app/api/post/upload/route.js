import Me from "../../../../../utils/me";
import postModel from "../../../../../models/post";
import connectToDb from "../../../../../configs/db";

export async function POST(req) {
  try {
    connectToDb();
    const { image, content } = await req.json();
    const user = await Me();
    if (!user) {
      return Response.json({ message: "user not find" });
    }

    if (!image.trim()) {
      return Response.json({ message: "image not find" });
    }
    console.log("api upload post ==>");
    await postModel.create({ image, content, user: user._id });
    return Response.json({ message: "upload post successfully", status: 201 });
  } catch (error) {
    return Response.json(
      { message: "Internal Server Error" },
      { status: 500, error }
    );
  }
}
