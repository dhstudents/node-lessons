async function doall() {
    let n = await do1();
    n += await do2();
    console.log(n);
}

async function do1() {
    //setTimeout( ()=> 1 , 1000);
    return 1
}
async function do2() {
    //setTimeout( ()=> 1 , 1000);
    return 1
}

doall();