setInterval( function() {
    console.log('world');
} , 5000)

const http = require('http');

setTimeout( () => {
    console.log('fetching google.co.il');
    http.get( { host: 'google.co.il'} , (res) => {
        console.log(res);
    })
} , 2000)