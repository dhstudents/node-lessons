const http = require('http');
const dd = require('./callbackData');

const server = http.createServer( function(req, res) {
    if (req.url === '/calc') {
        //let content = '';
        dd.getNumbers( (param) => {
            res.writeHead(200,'Content-Type : text/plain');
            res.write(JSON.stringify(param));
            res.end('!!!');
        })
    }
}).listen(8000);
console.log("Listening 8000");