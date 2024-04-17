import connectToDb from "../../../../../configs/db";
import { generateToken } from "../../../../../utils/auth/sign";
import userModel from "../../../../../models/users";
import path from "path";
import { writeFile } from "fs/promises";

export async function PUT(req, { params }) {
  try {
    connectToDb();
    const { id } = params;

    const formData = await req.formData();
    const userName = formData.get("userName");
    const email = formData.get("email");
    const profileImage = formData.get("profileImage");
    const phone = formData.get("phone");

    const buffer = Buffer.from(await profileImage.arrayBuffer());
    const filename = Date.now() + profileImage.name;
    const imgPath = path.join(process.cwd(), "public/uploads/" + filename);
    await writeFile(imgPath, buffer);

    const token = generateToken({ email });
    await userModel.findOneAndUpdate(
      { _id: id },
      {
        userName,
        email,
        profileImage: `http://localhost:3000/uploads/${filename}`,
        phone,
      },
      { new: true }
    );

    return Response.json(
      { message: "User Update Successfully :))" },
      {
        status: 201,
        headers: { "Set-Cookie": `token=${token};path=/;httpOnly=true;` },
      }
    );
  } catch (error) {
    console.log("===>", error);
    return Response.json(
      { message: "Internal Server Error" },
      { status: 500, error }
    );
  }
}
