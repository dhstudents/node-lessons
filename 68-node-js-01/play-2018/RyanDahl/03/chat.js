let net = require('net');

let sockes = [];
let s = net.createServer( (sockect) => {
    sockects.push(socket);

    socket.on('end' , () => {
        let i = sockets.indexOf(socket)
        sockets.splice(i,1);
        //delete sockects[i]
    })

    sockect.on('data' , (data) => {
        for (let i; i < sockects.length ; i ++) {
            if (socket[i] === socket) continue;
            sockects[i].write(i);
        }
    });
});