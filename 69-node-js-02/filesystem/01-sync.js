const fs = require('fs');

const data = fs.readFileSync('./data/nums.txt');
//const data = fs.readFileSync('./data/nums.txt','utf8');
console.log(data);

//const arr = data.trim().split("\r\n");
//console.log(arr);
/*
var sum = 0;
arr.forEach( n => {
    sum += parseInt(n);
});

console.log(sum);
*/
