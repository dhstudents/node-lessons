var mysql = require('promise-mysql');
 
mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'samplefornode'
}).then( function(conn){
    // do stuff with conn
    var result = conn.query('select * from employees');
    result.then( function(data) {
        console.log(data);
    })
    conn.end();
});