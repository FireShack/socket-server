const socket = io();
const userState = document.querySelector("#user-state");
const inputMsg = document.querySelector("#input-message");
const btnSendMsg = document.querySelector("#send-message");
const serverMsg = document.querySelector("#input-message-server");
const userRes = document.querySelector("#user-response");

btnSendMsg.addEventListener("click", (e) => {
  e.preventDefault();
  const message = inputMsg.value;
  socket.emit("send-msg", message);
  inputMsg.value = ""
});

socket.on("connect", () => {
  userState.textContent = "Connected";
  userState.classList.remove("text-danger");
  userState.classList.add("text-success");
});
socket.on("disconnect", () => {
  userState.textContent = "Disconnected";
  userState.classList.remove("text-success");
  userState.classList.add("text-danger");
});

socket.on("send-msg", (payload) => {
  const { id, msg } = payload;
  const serversMsg = msg;
  serverMsg.value = serversMsg;
  userRes.textContent = id;
});
