function getData(state) {
    return new Promise( function(resolve , reject) {
        if (state)
            resolve("OK");
        else
            reject("NG");
    });
}


let ddd = getData(false);

ddd
    .then( (data) => { console.log(data); return data})
    .then( (data) => { console.log(data + "AAA") ; return data })
    .then( (data) => { console.log(data + "BBB") })
    .catch( (errData) => console.log(errData) );

