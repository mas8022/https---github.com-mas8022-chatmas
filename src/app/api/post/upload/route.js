import Me from "../../../../../utils/me";
import postModel from "../../../../../models/post";
import connectToDb from "../../../../../configs/db";
import FileResize from "@/utils/fileResizer";

export async function POST(req) {
  try {
    connectToDb();
    const formData = await req.formData();
    const file = formData.get("postImage");
    const content = formData.get("content");

    const user = await Me();
    if (!user) {
      return Response.json({ message: "user not find" }, { status: 404 });
    }

    const { fileName } = await FileResize(file);

    await postModel.create({
      postImage: `https://maschatbucket.storage.iran.liara.space/${fileName}`,
      content,
      user: user._id,
    });

    return Response.json(
      {
        imageSrc: `https://maschatbucket.storage.iran.liara.space/${fileName}`,
      },
      { message: "upload post successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log("===>", error);

    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
