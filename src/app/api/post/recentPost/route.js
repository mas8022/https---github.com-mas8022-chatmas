import connectToDb from "@/configs/db";
import postModel from "@/models/post";

export async function GET() {
  try {
    connectToDb();
    const recentPost = await postModel
      .find({})
      .populate("user", "profileImage userName")

      .limit(3);
    return Response.json(JSON.parse(JSON.stringify(recentPost)));
  } catch (error) {
    return Response.json({
      message: "Internal Server Error",
      status: 500,
    });
  }
}
