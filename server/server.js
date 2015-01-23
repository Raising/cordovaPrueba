var io = require('socket.io').listen(8080);

io.sockets.on('connection', function (socket) {
  console.log('emit...');
  socket.emit('ping', { message: 'Hello from server ' + Date.now() });
  socket.on('pong', function (data) {
    console.log(data.message);
  });
  socket.on('pedido', function (data) {
    console.log("se ha realizado un pedido: ",data.message);
  });
});

console.log('listening on port 8080');