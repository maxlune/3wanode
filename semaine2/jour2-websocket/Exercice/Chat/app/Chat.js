const ent = require("ent");

const User = require("./User");

class Chat {
  constructor(io) {
    this.io = io;
    this.users = []; // liste des users
    this.messages = []; // liste des messages
  }

  onConnection(socket) {
    console.log(`Client`, socket.id, "is connected via WebSockets");
    socket.on("user:join", (nickname) => {
      this.addUser(socket, nickname);
    });

    socket.on("disconnect", () => {
      this.removeUser(socket.id);
    });

    socket.on("message:new", ({ message, nickname }) =>
      this._onNewMessage(socket, nickname, message)
    );
  }

  _onNewMessage(socket, nickname, message) {
    console.log("nickname:", nickname);
    console.log("message:", message);

    if (typeof message !== "string" || typeof nickname !== "string") {
      console.log("Message and nickname must be strings");
      return;
    }
    message = ent.encode(message);
    nickname = ent.encode(nickname);

    this.io.sockets.emit("message:new", { message, nickname });
  }

  addUser(socket, nickname) {
    const user = new User(socket.id, nickname);
    this.users.push(user);
    this.io.sockets.emit(
      "users:update",
      this.users.map((user) => user.nickname)
    );
  }

  removeUser(socketId) {
    this.users = this.users.filter((user) => user.id !== socketId);
    this.io.sockets.emit(
      "users:update",
      this.users.map((user) => user.nickname)
    );
  }
}

module.exports = Chat;
