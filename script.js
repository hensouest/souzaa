const messages = document.getElementById("messages");
const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message-input");

const socket = io();

socket.on("message", (message) => {
  const newMessage = document.createElement("p");
  newMessage.textContent = message;
  messages.appendChild(newMessage);
  messages.scrollTop = messages.scrollHeight;
});

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!messageInput.value) return;
  socket.emit("message", messageInput.value);
  messageInput.value = "";
});
