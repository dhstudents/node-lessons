const http = require('http');
const path = require('path');
const emp = require('../controllers/employee');
const settings = require('../settings');
const httpMsgs = require('../core/httpMsgs');


http.createServer((req, res) => {
    switch (req.method) {
        case 'GET':
            if (req.url === "/") {
                httpMsgs.showHome(req, res);
            } else if (req.url === "/employees") {
                emp.getList(req, res);
            } else {
                let pattern = "[0-9]{4}";

                let exppatt = new RegExp('/employees/' + pattern);
                // check it
                if (exppatt.test(req.url)) {
                    // get it
                    let patt = new RegExp(pattern);
                    let result = patt.exec(req.url);
                    emp.get(req, res, result[0])
                } else {
                    httpMsgs.show404(req, res);
                }
            }
            break;
            case 'POST':
            if (req.url === "/employees") {
                
            } else {
                httpMsgs.show404(req, res);
            }
            break;
        case 'PUT':
            break;
        case 'DELETE':
            break;
        default:
            httpMsgs.show405(req, res);
            break;
    }
}).listen(settings.webPort, () => {
    console.log('Strated listening at: ' + settings.webPort);
})



/*
http://localhost:9000/employees       GET  (fetch)
http://localhost:9000/employees/1001  GET  (fetch)
http://localhost:9000/employees       POST   (insert)
http://localhost:9000/employees       PUT    (update)
http://localhost:9000/employees       DELETE (delete)



*/