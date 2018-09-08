const fs = require('fs');
function getNumbers() {
    return new Promise( function(resolve, reject) {
        fs.readFile(__dirname +'/numbers.dat','utf8' , function(err , content) {
            let sum = 0;
            if (content === undefined) {
                return reject(JSON.stringify(err));
            }
            content.trim().split('\r\n').forEach( (item) => {
                sum += item | 0;
            })
            if (sum > 0) {
                resolve(sum);
            } else {
                reject("Error in calculating :" + sum.toString())
            }
        });
    });
}

module.exports.getSum = getNumbers;