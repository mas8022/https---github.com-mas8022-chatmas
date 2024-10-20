import connectToDb from "@/configs/db";
import messageModel from "@/models/message"

connectToDb();

export default async function socketFuncs(io, socket) {
  socket.on("sendMessage", async ({ sender, receiver, message }) => {
    await messageModel.create({ sender, receiver, message });

    const messages = await messageModel.find({
      $or: [
        { sender, receiver },
        { sender: receiver, receiver: sender },
      ],
    });

    io.to(`${sender}-${receiver}`)
      .to(`${receiver}-${sender}`)
      .emit("allMessages", messages);
  });

  socket.on("getMessages", async ({ sender, receiver }) => {
    socket.join(`${sender}-${receiver}`);
    socket.join(`${receiver}-${sender}`);

    const messages = await messageModel.find(
      {
        $or: [
          { sender, receiver },
          { sender: receiver, receiver: sender },
        ],
      },
      "-__v -updatedAt"
    );

    io.to(socket.id).emit("allMessages", messages);
  });

}
