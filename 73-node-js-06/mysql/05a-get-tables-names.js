const mysql = require('mysql');
// 1.create connection
const con = mysql.createConnection(
    // connection details
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'northwind'
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
    `show tables`
    ,
    // this is fat arrow function
    (err,rows) => { 
    if (err) throw err;

    let names = [];
    rows.forEach(
        row => {
           //console.log(row.Tables_in_northwind);
           names.push(row.Tables_in_northwind);
        });

        console.log(names);
    }

);

con.end();