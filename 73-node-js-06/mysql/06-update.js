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

// 3. crud : update
// use backtick `` for free text
con.query(
    `update cars set year = 1967 where id = 1`
    ,
    // this is fat arrow function
    (err,result) => { 
        if (err) throw err;
        console.log(`Updated : ${result.changedRows} rows.` );
    }
);

con.end();