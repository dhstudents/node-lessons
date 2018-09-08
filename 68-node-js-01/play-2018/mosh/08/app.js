const http = require('http');


const server = http.createServer( (req,res) => {
    if (req.url === '/')  {
        res.write('Hello Node!!! ' + new Date() );
        res.end();
    };
    if (req.url === '/search')  {
        res.setHeader('content-type' , 'text/html');
        res.write("<label>Search:</label><input type='text'>");
        res.write("<button>Search</button>");
        res.write("<hr>");
        res.end();
    };



});



// server.on('connection' , function(socket) { 
//     console.log('New connection' + socket.localAddress);
//     //console.clear();
//     //console.log('socket', socket);
// });



server.listen(3000);

console.log('Listening on port 3000...');