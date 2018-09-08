const db = require('../core/db.js');
const httpMsgs = require('../core/httpMsgs');
const util = require('util');

// get
exports.getList = function(req, res) {
    db.executeSql("SELECT * FROM employees" , function(data , error) {
        if (error) {
            httpMsgs.show500(req , res, error);
        } else {
            //res.writeHeader(200, {"Content-Type" : "application/json"});
            //res.write(JSON.stringify(data));
            httpMsgs.sendJson200(req , res, data)
        }
//        res.end()
    })
}
exports.get = function(req, res , empid) {
    db.executeSql("SELECT * FROM employees where empid = " + empid , function(data , error) {
        if (error) {
            httpMsgs.show500(req , res, error);
        } else {
            httpMsgs.sendJson200(req , res, data)
        }
    })
}

// post
exports.add = function(req, res , reqBody) {
    try {
        if (!reqBody) {
            throw new Error('Input not valid')
        }
        const data = JSON.parse(reqBody);
        if (!data)  {
            throw new Error('Input not valid')
        } else {
            //          (empid,empname,salary,department) VALUES (1001,'AAAAA',4300,10)`
            let sql = `INSERT INTO employees `
            sql += util.format("%d , %s , %d , %d" , data.empid , data.empname , data.salary , data.department); 
            db.executeSql(sql , function(data , error) {
                if (error) {
                    httpMsgs.show500(req , res, error);
                } else {
                    httpMsgs.send(req , res)
                }
            })
        }
    } catch (ex) {
        httpMsgs.show500(req , res , ex);
    }

}

// put
exports.update = function(req, res , reqBody) {

}

// delete
exports.delete = function(req, res , reqBody) {

}

