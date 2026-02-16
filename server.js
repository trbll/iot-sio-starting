const path = require("path");
const http = require("http");
const express = require("express");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

// Initialize Socket.IO now so students can immediately add events in lab.
const io = new Server(server);

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (req, res) => {
  res.json({ ok: true, message: "Server is running" });
});

io.on("connection", (socket) => {
  console.log(`Client connected: ${socket.id}`);

  // TODO (lab): add custom events here.
  // Example:
  // socket.on("chat:send", (payload) => {
  //   io.emit("chat:message", payload);
  // });

  socket.on("disconnect", () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
