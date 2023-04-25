const ent = require("ent");

const User = require("../User");

class Chat {
  constructor(io) {
    this.io = io;
    this.users = []; // Liste des users
    this.messages = []; // Liste des messages
  }

  onConnection(socket) {
    console.log(`Client, ${socket.id}, is connected vie WebSockets`);

    socket.on(`message:new`, (message) =>
      this._onNewMessage(socket, "username", message)
    );
  }

  _onNewMessage(socket, user, message) {
    message = ent.encode(message);
    nickname = ent.encore(nickname);

    this.io.sockets.emit("message:new", { message, nickname });
  }
}

module.exports = Chat;
