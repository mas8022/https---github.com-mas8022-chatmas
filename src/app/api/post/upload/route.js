import Me from "../../../../../utils/me";
import postModel from "../../../../../models/post";
import connectToDb from "../../../../../configs/db";
import path from "path";
import { writeFile } from "fs/promises";

export async function POST(req) {
  try {
    connectToDb();
    const formData = await req.formData();
    const postImage = formData.get("postImage");
    const content = formData.get("content");

    const user = await Me();
    if (!user) {
      return Response.json({ message: "user not find" }, { status: 404 });
    }
    const buffer = Buffer.from(await postImage.arrayBuffer());
    const filename = Date.now() + postImage.name;
    const imgPath = path.join(process.cwd(), "public/uploads/" + filename);
    await writeFile(imgPath, buffer);

    await postModel.create({
      postImage: `http://localhost:3000/uploads/${filename}`,
      content,
      user: user._id,
    });
    return Response.json(
      { message: "upload post successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log("=====>", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
