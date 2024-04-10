export async function POST(params) {
  try {


    
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
