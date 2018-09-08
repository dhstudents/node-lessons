// promise return promise
// npm install request --save 
const request = require('request');

async function getGit() {
    try {
        let users = await http('https://api.github.com/users');
        let repoUrl = users[0].repos_url;
        let repos = await http(repoUrl);
        let languageUrl = repos[0].languages_url;
        let lang = await http(languageUrl);
        console.log(lang);
        // return lang
    } catch (e) {
        console.log(e);
    }
}

function http(url) {

    let options = { 
        url: url ,
        headers: {
            'User-Agent': 'request'
        }
    };

    return new Promise( function(resolve , reject) {
        request.get( options , function( err , response , body) {
            if (err)
                reject(err);
            if (body) {
                resolve(JSON.parse(body));
            }
        });
    });
}

getGit();

// console.log('fetching users');
// http('https://api.github.com/users' , 'GET')
//     .then( function( users) {
//         console.log('fetching repos');
//        // console.log(users[0]);
//         let user = users[0];
//         return http(user.repos_url , 'GET')
//     })
//     .then( function(repos) {
//         console.log('fetching language');
//         //console.log(repos[0]);
//         let repo = repos[0];
//         return http(repo.languages_url , 'GET')
//     })
//     .then( function(data) {
//         console.log(data);
//     })
//     .catch( function(err) {
//         console.log('Caught Error: ' , err);
//     });





