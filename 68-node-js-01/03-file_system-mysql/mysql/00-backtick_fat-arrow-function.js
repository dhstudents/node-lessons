/*
const bt = `Hello`;

const mbt = `Hello
             World`;

const h = "Hello";
// interpolation
const ibt = `${h} World!`;


//console.log(bt);
//console.log(mbt);
//console.log(ibt);
*/

//-----------------------------------
const f = function(a) { return a * 100};

const faf = a => { return a * 100};
const fafnp = () => { console.log('Hello fat arrow function')}

console.log(f(4));
console.log(faf(3));
fafnp();
