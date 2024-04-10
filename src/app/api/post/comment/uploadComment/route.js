import connectToDb from "@/configs/db";
import Me from "@/utils/me";
import postModel from '@/models/post'

export async function POST(req) {
  try {
    connectToDb();
    const { text, post } = await req.json();

    const user = await Me();

    const comment = {
      commenter: user._id,
      post,
      text,
    };

    await postModel.findByIdAndUpdate(
      { _id: post },
      { $push: { comments: comment } }
    );


    return Response.json(
      { message: "send comment successfully" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { message: "Internal Server Error" },
      { status: 500, error }
    );
  }
}
