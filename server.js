import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";
import socketFuncs from "./app/socketFuncs.js";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;

const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);

  const io = new Server(httpServer);

  io.on("connection", async (socket) => {
    socketFuncs(io, socket);
  });

  httpServer
    .once("error", (err) => {
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
