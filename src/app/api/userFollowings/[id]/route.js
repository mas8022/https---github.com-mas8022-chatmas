import connectToDb from "@/configs/db";
import followModel from "@/models/follow";

export async function GET(req, { params }) {
  try {
    connectToDb()
    const followings = await followModel.find({ user: params.id }, "-user -__v").populate("following", "userName profileImage")

    return Response.json(followings);
  } catch (error) {
    return Response.json(
      { message: "Internal Server Error" },
      { status: 500, error }
    );
  }
}
