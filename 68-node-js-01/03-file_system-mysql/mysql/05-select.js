const mysql = require('mysql');
// 1.create connection
const con = mysql.createConnection(
    // connection details
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'test'
    }
);
// 2.cconnect
con.connect( 
    err => {
        if (err) {
            console.log('Error connecting to DB:' + err);
            return;
        }
        console.log('Connected');
    }
);

// 3. crud : insert
// use backtick `` for free text
con.query(
    `select * from cars`
    ,
    // this is fat arrow function
    (err,rows, fields) => { 
        if (err) throw err;
       // console.log('fields', fields);
       console.log('rows', rows);
        rows.forEach(
            row => {
            console.log(row);
        });
    }
);

con.end();