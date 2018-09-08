const http = require('http');
const qs = require('querystring');
const StringBuilder = require('stringbuilder');
const PORT = 9000;

function getHomePage(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write(`<html>
                    <head>
                        <title>Home</title>
                    </head>
                    <body>
                        Want to do some calculation? Click 
                        <a href="/calcform">here</a>
                    </body>
               </html>
              `);
    res.end();
}

function get404(req, res) {
    res.writeHead(404, 'Resource Not Found', {
        'Content-Type': 'text/html'
    });
    res.write(`<html>
                    <head>
                        <title>404</title>
                    </head>
                    <body>
                        Resource not found<br>
                        Go To <a href="/">Home</a>
                    </body>
               </html>
              `);
    res.end();
};

function get405(req, res) {
    res.writeHead(405, "Method not soppurted", {
        'Content-Type': 'text/html'
    });
    res.write(`<html>
                    <head>
                        <title>Home</title>
                    </head>
                    <body>
                        Method not supported!!!!  
                        Go To <a href="/">home</a>
                    </body>
               </html>
              `);
    res.end();
};

function getCalcHTML(req, res, data) {
    let sb = new StringBuilder({
        newline: "\r\n"
    });
    sb.appendLine('<html>');
    sb.appendLine('<body>');
    sb.appendLine('<form method="post" action="/calculate">');
    sb.appendLine('<pre>');
    sb.appendLine('<label>');
    sb.appendLine('Enter First No:');

    if (data && data.txtFirstNo) {
        sb.appendLine('<input type="text" name="txtFirstNo" value="{0}"',data.txtFirstNo);
    } else {
        sb.appendLine('<input type="text" name="txtFirstNo" value=""');
    }

    sb.appendLine('</label>');
    sb.appendLine('Enter Second No:');

    if (data && data.txtSecondNo) {
        sb.appendLine('<input type="text" name="txtSecondNo" value="{0}"',data.txtSecondNo);
    } else {
        sb.appendLine('<input type="text" name="txtSecondNo" value=""');
    }

    sb.appendLine('</label>');
    sb.appendLine('<button type="submit">Calculate</button>');
    sb.appendLine('<tr>');
    sb.appendLine('<div>');

    let result = '';
    if (data) {
        sb.appendLine('<h4>Result:</h4>');
        result = (data.txtFirstNo | 0) + (data.txtSecondNo | 0)
        sb.appendLine('Sum={0}', result);
    }
    sb.appendLine('</div>');
    sb.appendLine('</pre>');
    sb.appendLine('</form>');
    sb.appendLine('</body>');
    sb.appendLine('</html>');


    sb.build((err, result) => {
        res.write(result);
        res.end();
    })
}

function getCalcForm(req, res , formData) {
    res.writeHead(200, {'Content-Type': 'text/html' });
    getCalcHTML(req,res , formData)
}

http.createServer(function (req, res) {
    console.log(req.url + " " + new Date())
    switch (req.method) {
        case "GET":
            if (req.url === '/') {
                getHomePage(req, res);
            } else if (req.url === '/calcform') {
                getCalcForm(req, res);   // first time show the form
            } else {
                get404(req, res);
            }
            break;
        case "POST":
            if (req.url === '/calculate') {
                // IncomingMessage
                let reqBody = ''
                req.on('data', function (post_data) {
                    reqBody += post_data;
                    if (reqBody.length > 1e7) // 10MB
                    {
                        res.writeHead(413, 'Request Entity too large', {
                            'Content-Type': 'text/html'
                        });
                        res.write(`<html>
                                              <head>
                                                 <title>413</title>
                                              </head>
                                              <body>
                                                 413 Too large data  
                                                 Go To <a href="/">home</a>
                                              </body>
                                            </html>`);
                        res.end();
                    }
                });
                req.on('end', function (postdata) {
                   // console.log(reqBody);
                   // res.end(reqBody);
                   let formData = qs.parse(reqBody);
                   console.log(formData);
                   getCalcForm(req,res, formData); // now pass the data and show the form with result
                });
            }
            break;
        default:
            get405(req, res);
            break;
    }
}).listen(PORT);
console.log("Server running.... port 9000");



// res.writeHead(200, {"Content-Type" : "text/html"});
// res.write("<html><body>Hello <b>World</b></body></html>");
// res.end();