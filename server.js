require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT;
const httpServer = require("http").createServer(app);
require("socket.io")(httpServer);

app.use(express.static("public"));
app.use(cors());

httpServer.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
