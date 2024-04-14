import Me from "@/utils/me";
import followModel from "@/models/follow";

export async function GET(req, { params }) {
  let isFollow = false;
  try {
    const me = await Me();

    const follow = await followModel.findOne({
      user: me._id,
      following: params.id,
    });

    if (follow) {
      isFollow = true;
    }

    return Response.json(isFollow);
  } catch (error) {
    return Response.json(
      { message: "internal server error", status: 500 },
      error
    );
  }
}
