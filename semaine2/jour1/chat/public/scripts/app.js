("use strict");
console.log("Hello World!");

const socket = io.connect("http://localhost:9000");

socket.on("connect", () => {
  console.log("Connected to server");
});

var messages = document.querySelector(".messages");
var form = document.getElementById("form");
var input = document.getElementById("input");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", input.value);
    input.value = "";
  }
});

socket.on("chat message", function (msg) {
  var message = document.createElement("p");
  message.innerHTML = '<span class="test">' + msg.id + "</span> " + msg.message;

  var hr = document.createElement("hr");

  messages.appendChild(message);
  messages.appendChild(hr);

  window.scrollTo(0, document.body.scrollHeight);
});
