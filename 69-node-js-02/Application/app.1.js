const http  = require('http');
const qs = require('querystring');
const StringBuilder = require('stringbuilder');
const PORT = 9000;

http.createServer( function(req , res) {
    console.log(req.url)
    switch (req.method) {
        case "GET":
            if (req.url === '/') {
                res.writeHead(200, { 'Content-Type' : 'text/html'});
                res.write(`<html>
                                <head>
                                    <title>Home</title>
                                </head>
                                <body>
                                    Want to do some calculation? Click 
                                    <a href="/calc">here</a>
                                </body>
                           </html>
                          `
                        );
            }
            break;
        case "POST":
            break;
        default:
            break;
    }
    res.end();
    // res.writeHead(200, {"Content-Type" : "text/html"});
    // res.write("<html><body>Hello <b>World</b></body></html>");
    // res.end();
} ).listen(PORT);
console.log("Server running.... port 9000");