const http = require('http');
const dd = require('./01-data').getData;

const server = http.createServer( function(req, res) {
    dd.on('model' , function(data) {
        //console.log('from server' , data)
        res.writeHead(200,'Contant-Type: application/json');
        res.end(JSON.stringify(data));
    } );
    dd.getNumbers(dd);
}).listen(8002);
console.log("Listening 8002");