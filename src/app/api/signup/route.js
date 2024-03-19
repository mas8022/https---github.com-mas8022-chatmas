const { default: connectToDb } = require("../../../../configs/db");
import userModel from "../../../../models/users";
import { generateToken, hashPassword } from "../../../../utils/auth/sign";
export async function POST(req) {
  try {
    connectToDb();
    const body = await req.json();
    const { userName, password, email, profileImage } = body;
    const token = generateToken({ email });
    const hashedPassword = await hashPassword(password);


    await userModel.create({
      userName,
      password: hashedPassword,
      email,
      profileImage,
    });
    return Response.json(
      { message: "User Created Successfully :))" },
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
