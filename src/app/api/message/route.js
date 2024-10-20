import Me from "@/utils/me";
import ChatsModel from "@/models/chat";
import MessagesModel from "@/models/message";

export async function POST(req) {
  try {
    const user = await Me();
    const { to, content } = await req.json();

    const isChat = await ChatsModel.findOne({
      $or: [
        { from: user._id, to },
        { from: to, to: user.id },
      ],
    });
    if (isChat) {
      const message = await MessagesModel.create({ user: user._id, content });
      await ChatsModel.findOneAndUpdate(
        {
          $or: [
            { from: user._id, to },
            { from: to, to: user._id },
          ],
        },
        {
          $push: {
            messages: message._id,
          },
        }
      );
    } else {
      const message = await MessagesModel.create({ user: user._id, content });
      await ChatsModel.create({
        from: user._id,
        to,
        messages: [message._id],
      });
    }
    return Response.json({ message: "success" });
  } catch (err) {
    return Response.json(
      { message: "Internal Server Error", err },
      { status: 500 }
    );
  }
}
