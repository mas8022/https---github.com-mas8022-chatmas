import postModel from "@/models/post";

export async function GET(req, { params }) {
  try {
    const posts = await postModel.find({ user: params.id });
    return Response.json(posts);
  } catch (error) {
    return Response.json(
      { message: "Internal Server Error" },
      { status: 500, error }
    );
  }
}
