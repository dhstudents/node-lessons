const settings = require('../settings');




// too large
exports.show413 = function(req,res) {}

exports.show404 = function(req,res) {
    if (settings.httpMesgsFormat === 'HTML') {
        res.writeHead(404, "Resource not found" , {"Content-Type": "text/html"});
        res.write(`<html>
                        <head><title>404</title</head>
                        <body>
                            <p>405: Method not supported <br>
                            ${error}
                        </body>
                    </html>`);
    } else {
        res.writeHead(404, "Resource not found" , {"Content-Type": "application/json"});
        res.write(JSON.stringify({ data : "Resource not found"}));
        res.end();
    }
}

exports.show405 = function(req,res) {
    if (settings.httpMesgsFormat === 'HTML') {
        res.writeHead(405, "Method not supported" , {"Content-Type": "text/html"});
        res.write(`<html>
                        <head><title>405</title</head>
                        <body>
                            <p>405: Method not supported <br>
                            ${error}
                        </body>
                    </html>`);
    } else {
        res.writeHead(405, "Method not supported" , {"Content-Type": "application/json"});
        res.write(JSON.stringify({ data : "Method not supported"}));
        res.end();
    }
}

exports.show500 = function(req , res , error) {
    if (settings.httpMesgsFormat === 'HTML') {
        res.writeHead(500, "Internal Server Error" , {"Content-Type": "text/html"});
        res.write(`<html>
                        <head><title>500</title</head>
                        <body>
                            <p>500: Internal Error details: <br>
                            ${error}
                        </body>
                    </html>`);
    } else {
        res.writeHead(500, "Internal Server Error" , {"Content-Type": "application/json"});
        res.write(JSON.stringify({ data : "Error occured:" + error}));
        res.end();
    }
};


exports.send200 = function(req , res  ,data) {
    res.writeHead(200 ,{"Content-Type" : "application/json"});
    res.end()
}

exports.sendJson200 = function(req , res  ,data) {
    res.writeHead(200 ,{"Content-Type" : "application/json"});
    if (data) {
        res.write(JSON.stringify(data));
    }
    res.end();
}

exports.showHome = function(req , res) {
    res.writeHead(200 ,{"Content-Type" : "text/html"});
    res.write("<h1>Your options are:</h1>");
    res.write("<ul>");
    res.write("<li>/employees - GET all</li>");
    res.write("<li>/employes/empid - GET one</li>");
    res.write("</ul>");
    res.end();
}