import connectToDb from "@/configs/db";
import commentModel from "@/models/comment";

export async function POST(req, { params }) {
  try {
    connectToDb();

    await commentModel.findOneAndUpdate(
      { _id: params.id },
      { $inc: { disLike: 1 } }
    );

    return Response.json(
      { message: "disLike comment successfully" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { message: "Internal Server Error" },
      { status: 500, error }
    );
  }
}
