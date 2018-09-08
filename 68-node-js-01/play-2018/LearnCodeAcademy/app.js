const m = require('./m01');

console.log('ADD:',m.add(5,5));
m.inc();
m.inc();
m.inc();
m.inc();
m.inc();
m.inc();
m.inc();
m.inc();
console.log('Counter:',m.getConter());
throw new Error("KUKU");
//console.log(m);