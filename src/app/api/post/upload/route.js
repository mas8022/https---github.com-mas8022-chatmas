import Me from "../../../../../utils/me";
import postModel from "../../../../../models/post";
import connectToDb from "../../../../../configs/db";

export async function POST(req) {
  try {
    connectToDb();
    const { postImage, content } = await req.json();
    const user = await Me();
    if (!user) {
      return Response.json({ message: "user not find" });
    }

    if (!postImage.trim()) {
      return Response.json({ message: "image not find" });
    }
    await postModel.create({ postImage, content, user: user._id });
    return Response.json({ message: "upload post successfully", status: 201 });
  } catch (error) {
    return Response.json(
      { message: "Internal Server Error" },
      { status: 500, error }
    );
  }
}
