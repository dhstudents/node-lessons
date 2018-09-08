const http = require('http');
const dd = require('./Data');

const server = http.createServer( function(req, res) {
    if (req.url === '/calc') {
        async function getSum() {
            try {
                let result = await dd.getPromise();
                sum = { sum: result}
                res.writeHead(200,'Content-Type : text/plain');
                res.write(JSON.stringify(sum));
                res.end(' !!!');
            } catch (err) {
                res.writeHead(500,'Content-Type : text/plain');
                res.write(err);
                res.end("<br>\/\/\/");
            }
        }
        getSum();
    }
}).listen(8000);
console.log("Listening 8000");