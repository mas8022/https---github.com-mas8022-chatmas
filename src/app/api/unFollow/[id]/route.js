import Me from "@/utils/me";
import followModel from '@/models/follow'

export async function POST(req, { params }) {
  try {
    const me = await Me();
    await followModel.deleteOne({ user: me._id, following: params.id });
    return Response.json({ message: "unFollow successfully" });
  } catch (error) {
    return Response.json(
      { message: "Internal Server Error" },
      { status: 500, error }
    );
  }
}
