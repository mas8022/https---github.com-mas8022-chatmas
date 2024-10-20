"use client";
import { io } from "socket.io-client";

let socket = null;

export const getSocketConnection = () => {
  if (socket) {
    return socket;
  }
  
  socket = io();

  return socket;
};
