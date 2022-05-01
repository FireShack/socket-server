const mainController = (socket) => {
  socket.on("send-msg", (payload) => {
      const res = {
        msg: payload, 
        id: socket.id
      }
    socket.broadcast.emit("send-msg", res);
  });
};

module.exports = mainController;
