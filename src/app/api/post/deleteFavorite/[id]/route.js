import favoriteModel from "@/models/favorite";
import Me from "@/utils/me";

export async function POST(req, { params }) {
  try {
    const user = await Me();
    const postID = params.id;

    await favoriteModel.findOneAndDelete({
      user: user._id,
      post: postID,
    });

    return Response.json({
      message: "delete post from favorite document successfully",
    });
  } catch (error) {
    return Response.json(
      { message: "Internal Server Error" },
      { status: 500, error }
    );
  }
}
