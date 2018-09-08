// https://www.npmjs.com/package/promise-mysql
const mysqldb = require('promise-mysql');
const settings = require('../settings');

// callback( data, error)
exports.executeSql = function(sql , callback) {
    mysqldb.createConnection(settings.dbConfig)
            .then( (conn) => {
                    conn.query(sql)
                       .then( function(result) {
                           callback(result); // no need to pass error
                       }).catch( function(err) {
                           console.log(err);
                           callback(null , err);  // null for no data 
                       })
                    conn.end();
                })
            .catch( (err) => {
                    console.log(err);
                    callback(null , err);  // null for no data 
                });
}



