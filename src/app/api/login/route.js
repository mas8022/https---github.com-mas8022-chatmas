import connectToDb from "../../../../configs/db";
import userModel from "../../../../models/users";
import { generateToken, verifyPassword } from "../../../../utils/auth/sign";

export async function POST(req) {
  try {
    connectToDb();
    const { email, password } = await req.json();
    
    const user = await userModel.findOne({ email });
    if (!user) {
        return Response.json({ message: "user not find" });
    }

    const isValidPassword = verifyPassword(password, user.password);
    if (!isValidPassword) {
      return Response.json({ message: "password not valid" });
    }

    const token = generateToken({ email });

    return Response.json(
      { message: "User Logged In Successfully :))" },
      {
        status: 200,
        headers: { "Set-Cookie": `token=${token};path=/;httpOnly=true;` },
      }
    );
  } catch (error) {
    return Response.json(
      { message: "internal server error", status: 500 },
      error
    );
  }
}
