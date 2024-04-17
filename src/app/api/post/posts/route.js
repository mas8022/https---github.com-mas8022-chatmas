import { getAllPosts } from "@/utils/postTools";

export async function GET() {
  try {
    const posts = await getAllPosts();

    return Response.json(posts);
  } catch (error) {
    return Response.json(
      { message: "Internal ServerError" },
      { status: 500, error }
    );
  }
}
