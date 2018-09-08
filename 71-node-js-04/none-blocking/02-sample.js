// promise
function sendRequest(url, methd) {
    const promise = new Promise(
        function (resolve, reject) {
            setTimeout(
                function () {
                    let data = 'oo';
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
        console.log(data);
    }).catch(function (err) {
        console.log(err);
    });