import Me from "@/utils/me";
import followModel from "@/models/follow";
import connectToDb from "@/configs/db";

export async function POST(req, { params }) {
  try {
    connectToDb();
    const me = await Me();
    await followModel.create({ user: me._id, following: params.id });

    return Response.json(
      { message: "follow user Successfully :))" },
      {
        status: 201,
      }
    );
  } catch (error) {
    return Response.json(
      { message: "Internal Server Error" },
      { status: 500, error }
    );
  }
}

export async function GET() {
  try {
    connectToDb();
    const me = await Me();
    const followings = await followModel
      .find({ user: me._id }, "following")
      .populate("following", "userName profileImage");
    return Response.json(followings);
  } catch (error) {
    return Response.json(
      { message: "Internal Server Error" },
      { status: 500, error }
    );
  }
}
