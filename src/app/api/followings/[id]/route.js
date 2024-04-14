import Me from "@/utils/me";
import followModel from '@/models/follow'

export async function GET() {
  try {
    const me = await Me();
    const followers = await followModel
      .find({ following: me._id }, "following")
      .populate("user", "userName profileImage");
    return Response.json(followers);
  } catch (error) {
    return Response.json(
      { message: "Internal Server Error" },
      { status: 500, error }
    );
  }
}
