const mysql = require('mysql');

const con = mysql.createConnection(
    // connectiob details
    {
        host: 'localhost',
        user: 'root',
        password: '',
        databaase: 'test'
    }
);

con.connect( 
    err => {
        if (err) {
            console.log('Error connecting to DB:' + err);
            return;
        }
        console.log('Connected');
    }
);

con.end();