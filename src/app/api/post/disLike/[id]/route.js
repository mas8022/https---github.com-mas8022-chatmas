import connectToDb from "@/configs/db";
import postModel from "../../../../../../models/post";
import favoriteModel from '@/models/favorite'
import Me from "@/utils/me";
export async function POST(req,{ params }) {
  try {
    connectToDb();
    const user = await Me();
    const postID = params.id;

    await favoriteModel.findOneAndDelete({
      user: user._id,
      post: postID,
    });
    await postModel.findOneAndUpdate({ _id: params.id }, { $inc: { likes: -1 } });
    return Response.json(
        { message: "disLike the post successfully", status: 200 },
      );
} catch (error) {
    return Response.json(
      { message: "Internal Server Error" },
      { status: 500, error }
    );
  }
}
