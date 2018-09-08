async function doall() {
    let n = await do1();
    console.log(n)
    
    //n += await do2();
    //console.log(n);
}

async function do1() {
    let n = await setTimeout( ()=> 1 , 1000);
    return 1
}
async function do2() {
    //setTimeout( ()=> 1 , 1000);
    return 1
}

doall();



// new Promise( (resolve, reject) => {
//     resolve(1)
// }).then( (data) => console.log(data))