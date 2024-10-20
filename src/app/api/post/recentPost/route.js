import connectToDb from "@/configs/db";
import postModel from "@/models/post";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    connectToDb();
    const recentPost = await postModel
      .find({}, "-createdAt -updatedAt -__v")
      .populate("user", "profileImage userName")
      .sort({ _id: -1 })
      .limit(3);

    return Response.json(JSON.parse(JSON.stringify(recentPost)));
  } catch (error) {
    return Response.json({
      message: "Internal Server Error",
      status: 500,
    });
  }
}
