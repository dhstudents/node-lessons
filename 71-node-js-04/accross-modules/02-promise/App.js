const http = require('http');
const dd = require('./Data');

const server = http.createServer( function(req, res) {
    if (req.url === '/calc') {
        dd.getSum()
            .then( (param) => {
                result = { sum: param}
                res.writeHead(200,'Content-Type : text/plain');
                res.write(JSON.stringify(result));
                res.end(' !!!');
            })
            .catch(
                (errParam) => {
                    res.writeHead(200,'Content-Type : text/plain');
                    res.write(errParam);
                    res.end(' ???');
                }                
            )
    }
}).listen(8002);
console.log("Listening 8002");