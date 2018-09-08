async function doall() {
    let n = await do1();
    //console.log(n)
    n += await do2();
    console.log(n);
}

async function do1() {
   return new Promise( (resolve , reject) => {
       setImmediate( () => {
           resolve(1);
       } , 1000)
   });
}
async function do2() {
    return new Promise( (resolve , reject) => {
        setImmediate( () => {
            resolve(1);
        } , 1000)
    });
 }

doall();



// new Promise( (resolve, reject) => {
//     resolve(1)
// }).then( (data) => console.log(data))