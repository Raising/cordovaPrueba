var socket = io.connect("http://10.0.2.2:8080");
console.log( "connecting");

socket.on('ping', function (data) {
	console.log( data.message);
  socket.emit('pong', { message: 'Hello from client!' });
});

socket.on('connect', function () {
	console.log("connected");
});

socket.on('reconnect', function () {
	console.log("reconnected");
});

socket.on('disconnect', function () {
	console.log("disconnected");
});

socket.on('reconnecting', function () {
  console.log("reconnecting...");
});

socket.on('error', function () {
	console.log("error");
});