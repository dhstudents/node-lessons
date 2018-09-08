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
    `insert into cars(make , year, model)
                 values ('Chevrolet', 1957, 'Corvette')`
    ,
    // this is fat arrow function
    (err,result,fields) => { 
        if (err) {
            console.log('Insert failed ' + err);
            process.exit();
        } else {
            console.log(result.insertId);
            console.log('fields', fields);
        }

    }
);

con.end();