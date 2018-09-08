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
// 2.connect
con.connect( 
    err => {
        if (err) {
            console.log('Error connecting to DB:' + err);
            return;
        }
        console.log('Connected');
    }
);

// 3. create table
// use backtick `` for free text
con.query(
    `create table cars(
        id int not null auto_increment,
        year int,
        make varchar(100),
        model varchar(100),
        primary key(id)
    );`
)

con.end();