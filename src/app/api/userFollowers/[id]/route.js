import connectToDb from "@/configs/db";
import followModel from "@/models/follow";
export const dynamic = "force-dynamic";

export async function GET(req, { params }) {
  try {
    connectToDb()
    const followers = await followModel.find({ following: params.id }, "-user -__v").populate("user", "userName profileImage")

    return Response.json(followers);
  } catch (error) {
    return Response.json(
      { message: "Internal Server Error" },
      { status: 500, error }
    );
  }
}
