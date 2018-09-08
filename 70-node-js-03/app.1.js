// Promise( cb(resolve ,reject) {
//     result = some activity
//     upon result:
//           good resolve(result)
//           bad  reject(errdata)
// })


let pro = new Promise( function(resolve , reject) {
    setTimeout( () => {
        let n = Math.random() * 10;
        if (n > 5) 
            resolve("WIN");
        else 
            reject("LOST!!!")
    } , 2000)
});

pro.then( function(result) {
    console.log('Hi there: ' + result)
}).catch( function(err) {
    console.log(err);
})