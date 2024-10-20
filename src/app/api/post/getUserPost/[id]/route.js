import connectToDb from "@/configs/db";
import postModel from "@/models/post";
export const dynamic = "force-dynamic";

export async function GET(req, { params }) {
  try {
    connectToDb()
    const posts = await postModel.find({ user: params.id });
    return Response.json(posts);
  } catch (error) {
    return Response.json(
      { message: "Internal Server Error" },
      { status: 500, error }
    );
  }
}
