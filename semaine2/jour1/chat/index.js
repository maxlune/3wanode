const express = require("express");
const http = require("http");
const cors = require("cors");
const pug = require("pug");

const port = process.env.PORT || 9000,
  app = express();

const server = http.Server(app);
const io = require("socket.io")(server);

app.use(cors({ origin: "*" }));

require("dotenv").config();

app.use(express.static("public"));

app.set("view engine", "pug");

app.get("/", function (req, res, next) {
  res.render("index", { title: "Hey", message: "Hello there!" });
  next();
});

io.on("connection", (socket) => {
  console.log("Client", socket.id, "is connected via WebSockets");
  socket.on("disconnect", () => {
    console.log("Client", socket.id, " disconnected");
  });
  socket.on("chat message", (msg) => {
    io.emit("chat message", { id: socket.id, message: msg });
    console.log("message: " + msg);
  });
});

server.listen(port, () => console.log("Le server a démaré au port " + port));
