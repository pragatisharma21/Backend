import express from "express";
import cors from "cors";

import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8088;
const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "PUT", "POST", "DELETE"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Coneected: ${socket.id}`);
});

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
