import connectToDb from "../../../../../configs/db";
import { generateToken } from "../../../../../utils/auth/sign";
import userModel from "../../../../../models/users";

export async function PUT(req, {params}) {
  try {
    connectToDb();
    const { id } = params;

    const body = await req.json();
    const { userName, email, profileImage, phone } = body;
    const token = generateToken({ email });
    await userModel.findOneAndUpdate(
      { _id: id },
      {
        userName,
        email,
        profileImage,
        phone,
      },
      { new: true }
    );

    const userObject = updatedUser.toObject();
    
    return Response.json(
      { message: "User Update Successfully :))", user: userObject },
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
