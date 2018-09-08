let m1 = require('./m01');
let m2 = require('./m02');

// console.log('app\n' , module);
// console.clear();
// console.log(m1.a + m2.b);

console.log(require.main === module);
console.log(require.main.filename);

