class User {
  constructor(socket, nickname) {
    this.id = socket.id;
    this.nickename = nickname;
    this.socket = socket;
  }

  destroy() {
    this.id = null;
    this.nickename = null;
    this.socket.disconnect();
  }
}

module.exports = User;
