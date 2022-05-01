require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT;
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);

app.use(express.static("public"));
app.use(cors());

io.on("connection", (socket) => {
  console.log("Client connected");
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
  socket.on("send-msg", (payload) => {
      console.log(payload)
  })
});
httpServer.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
