let url = 'http://mylogger.io/log';

function log(msg) {
    // Send HTTP request
    console.log(msg);
}


// exports object
//module.exports.log = log;
//module.exports.endPoint = url;

// exports the function
module.exports = log;