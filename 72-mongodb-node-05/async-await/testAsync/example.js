let n = 0;
let log = [];
async function doit() {
    let do2000 = new Promise( (resolve , rej) => {
        setTimeout( ()=> resolve(2),2000)
    });
    let do1000 = new Promise( (resolve , rej) => {
        setTimeout( ()=> resolve(2),1000)
    });
    n = await do2000;
    n += await do1000;
    console.log([n ,log]);
    return [n ,log];
   //return Promise.resolve([n,log]);
}
// // async function do2000() {
// //     setTimeout( function() {
// //         log.push("do2000");
// //             }, 2000);
// //         Promise.resolve(2);
// // }
// async function do1000() {
//     setTimeout( function() {
//         log.push("do1000");
//         Promise.resolve(2);
//     }, 1000);
// }

doit().then( function(data) {
    console.log(data);
})