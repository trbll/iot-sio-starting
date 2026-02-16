const statusEl = document.getElementById("connection-status");
const formEl = document.getElementById("message-form");
const inputEl = document.getElementById("message-input");
const lastEventEl = document.getElementById("last-event");

const socket = io();

socket.on("connect", () => {
  statusEl.textContent = `Connected (${socket.id})`;
  statusEl.classList.remove("status-offline");
  statusEl.classList.add("status-online");
});

socket.on("disconnect", () => {
  statusEl.textContent = "Disconnected";
  statusEl.classList.remove("status-online");
  statusEl.classList.add("status-offline");
});

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const message = inputEl.value.trim();
  if (!message) {
    return;
  }

  // TODO (lab): align this event name and payload with server handlers.
  socket.emit("lab:placeholder", { message, sentAt: Date.now() });

  lastEventEl.textContent = `Emitted "lab:placeholder" with payload: ${message}`;
  inputEl.value = "";
});
