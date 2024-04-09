import Me from "@/utils/me";
import favoriteModel from "@/models/favorite";
import connectToDb from "@/configs/db";
export async function GET(req, { params }) {
  try {
    connectToDb();

    const user = await Me();

    let isLiked = false;

    const like = await favoriteModel.findOne({
      user: user._id,
      post: params.id,
    });

    if (like) {
      isLiked = true;
      return Response.json({ isLiked });
    }
    return Response.json({ isLiked });
  } catch (error) {
    return Response.json({
      message: "Internal Server Error",
      status: 500,
    });
  }
}
