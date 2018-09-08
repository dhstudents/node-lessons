const fs = require('fs');
function getNumbers(done) {
    fs.readFile(__dirname +'/numbers.dat','utf8' , function(err , content) {
        if(err) return done(err);
        let sum = 0;
        content.trim().split('\r\n').forEach( (item) => {
            sum += item | 0;
        })
        return done(sum)
    });
}
// function getNumbers(done) {
//          fs.readFile('./numbers.dat', function (err, data) {
//                  if (err) return done(err);
//              }
//             }

module.exports.getNumbers = getNumbers;