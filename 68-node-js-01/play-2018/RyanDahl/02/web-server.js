let http = require('http'); // load http module for client and server

// 1
// let s =  http.createServer( function(req,res) {
// });


let s =  http.createServer( function(req,res) {
// 3
    res.writeHead(200, {'content-type' : 'text/plain'});
    res.end('hello world\n');
});

// 2
s.listen(8000);


// run:  node web-server
// curl http://localhost:8000/
// curl -i http://localhost:8000/   // -i inspect headers
// use browser