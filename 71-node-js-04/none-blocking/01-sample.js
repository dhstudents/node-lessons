//https://www.youtube.com/watch?v=swdWUWtGxR4
//https://www.youtube.com/watch?v=aD_xw3Q-Qc0&list=PLvUGvPKbi_mvvxs3L7ruLszX5H6895T5L
// callbacks
function sendRequest(url , methd , successCallback , errorHandler) {
    setTimeout( 
        function() {
            let data = 'oo';
            if (data) {
                successCallback(data);
            } else {
                errorHandler('No Data!!!');
            }
        }
        , 1000)
}

sendRequest(
    '/doit' ,                              // url 
    'GET' ,                                // method
    function(data) { console.log(data); }, // success
    function(err) { console.log(err); }    // error
)