let net = require('net');

let server = net.createServer( (socket) => {
    socket.write('hello\n');
    socket.write('world\n');

    socket.on('data' , (data) => {
        socket.write('*>' + data + '\n');
    })
});


server.listen(8000);