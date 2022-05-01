require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mainController = require("./socket-controller/sockets.controller");

const app = express();
const port = process.env.PORT;
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);

app.use(express.static("public"));
app.use(cors());

io.on("connection", mainController);
httpServer.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
