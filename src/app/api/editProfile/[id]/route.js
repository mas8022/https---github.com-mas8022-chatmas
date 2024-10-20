import connectToDb from "../../../../../configs/db";
import { generateToken } from "../../../../../utils/auth/sign";
import userModel from "../../../../../models/users";
import FileResize from "@/utils/fileResizer";

export const dynamic = "force-dynamic";

export async function PUT(req, { params }) {
  try {
    connectToDb();
    const { id } = params;

    const formData = await req.formData();
    const userName = formData.get("userName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const file = formData.get("profileImage");

    const { fileName } = await FileResize(file);

    const token = generateToken({ email });
    await userModel.findOneAndUpdate(
      { _id: id },
      {
        userName,
        email,
        profileImage: `https://maghaleh.storage.iran.liara.space/${fileName}`,
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
    return Response.json(
      { message: "Internal Server Error" },
      { status: 500, error }
    );
  }
}
