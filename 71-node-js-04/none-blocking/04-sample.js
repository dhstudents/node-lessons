// promise
function sendRequest(url, methd) {
    const promise = new Promise(
        function (resolve, reject) {
            //throw new Error('error in promise');
            setTimeout(
                function () {
                    let data = 'ooooooooo';
                    if (data) {
                        resolve(data);
                    } else {
                        reject('No Data!!!');
                    }
                }, 1000)
        }
    );
    return promise;
}

sendRequest('/doit', 'GET')
    .then(function (data) {
        return data.toUpperCase();
    })
    .then( function(data) {
        console.log(data)
    })
    .then( function(data) {
        console.log(data)
        // this will 
    })

    .catch(function (err) {
        console.log(err);
    });