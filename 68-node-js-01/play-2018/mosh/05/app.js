
const pp = require('path');
const os = require('os');

console.log(pp.parse(__filename));

console.log(os.cpus());
console.log(os.totalmem());
console.log(os.freemem());
