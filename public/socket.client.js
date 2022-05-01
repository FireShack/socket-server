const userState = document.querySelector("#user-state");
const inputMsg = document.querySelector("#input-message");
const btnSendMsg = document.querySelector("#send-message");
const socket = io();

btnSendMsg.addEventListener("click", (e) => {
  e.preventDefault();
  const message = inputMsg.value;
  console.log(message)
  socket.emit("send-msg", message);
});

socket.on("connect", () => {
  console.log("connected");
  userState.textContent = "Connected";
  userState.classList.remove("text-danger");
  userState.classList.add("text-success");
});
socket.on("disconnect", () => {
  console.log("connected");
  userState.textContent = "Disconnected";
  userState.classList.remove("text-success");
  userState.classList.add("text-danger");
});
