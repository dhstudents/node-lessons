const fs = require('fs');

//fs.stat(path , flag , [mode] , callback)
//fs.statSync(path , flag , [mode] , callback)

let stat = fs.statSync("02-myfile.txt")

// let stat = fs.stat("02-myfile.txt" , (err , status) {
//     console.log(stat);
// })


console.dir(stat , {colors: true});