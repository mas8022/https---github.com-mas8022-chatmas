const { cookies } = require("next/headers");

export async function POST() {
  await cookies().delete("token");
  return Response.json({ message: "user Log out successfully" });
}
