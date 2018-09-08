// promise return promise
// npm install request --save 
const request = require('request');


function http(url , method) {
    method = method.toLowerCase();

    let options = { 
        url: url ,
        headers: {
            'User-Agent': 'request'
        }
    };

    return new Promise( function(resolve , reject) {
        request[method]( options , function( err , response , body) {
            if (err)
                reject(err);
            if (body) {
                resolve(JSON.parse(body));
            }
        });
    });
}

console.log('fetching users');
http('https://api.github.com/users' , 'GET')
    .then( function( users) {
        console.log('fetching repos');
       // console.log(users[0]);
        let user = users[0];
        return http(user.repos_url , 'GET')
    })
    .then( function(repos) {
        console.log('fetching language');
        //console.log(repos[0]);
        let repo = repos[0];
        return http(repo.languages_url , 'GET')
    })
    .then( function(data) {
        console.log(data);
    })
    .catch( function(err) {
        console.log('Caught Erro: ' , err);
    });





