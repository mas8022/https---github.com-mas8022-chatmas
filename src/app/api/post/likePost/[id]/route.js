import connectToDb from "@/configs/db";
import postModel from "../../../../../../models/post";

export async function POST(req,{ params }) {
  try {
    connectToDb();
    await postModel.findOneAndUpdate({ _id: params.id }, { $inc: { likes: 1 } });
    return Response.json(
        { message: "like the post successfully", status: 200 },
      );
} catch (error) {
    return Response.json(
      { message: "Internal Server Error" },
      { status: 500, error }
    );
  }
}
