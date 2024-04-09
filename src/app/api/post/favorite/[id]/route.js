import Me from "@/utils/me";
import favoriteModel from "@/models/favorite";

export async function POST(req, { params }) {
  try {
    const user = await Me();
    const postID = params.id;

    await favoriteModel.create({
      user: user._id,
      post: postID,
    });
    
    return Response.json({
      message: "add post to favorite document successfully",
    });
  } catch (error) {
    return Response.json(
      { message: "Internal Server Error" },
      { status: 500, error }
    );
  }
}

