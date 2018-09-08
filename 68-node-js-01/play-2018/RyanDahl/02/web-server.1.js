let http = require('http'); // load http module for client and server

let s =  http.createServer( function(req,res) {
    res.writeHead(200, {'content-type' : 'text/plain'});
    res.write('hello\n');
    setTimeout( () => {
        res.end('world\n');
    },2000)
});


s.listen(8000);
