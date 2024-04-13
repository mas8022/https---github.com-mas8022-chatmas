import Me from "@/utils/me";
import followModel from "@/models/follow";
import connectToDb from "@/configs/db";

export async function POST(req, { params }) {
  try {
    connectToDb();
    const user = await Me();
    await followModel.create({ user: user._id, following: params.id });

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
