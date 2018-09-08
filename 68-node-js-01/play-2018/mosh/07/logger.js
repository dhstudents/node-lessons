const  EventEmmiter = require('events');
//const emmiter = new EventEmmiter();
let url = 'http://mylogger.io/log';

class Logger extends EventEmmiter {
    log(msg) {
        // Send HTTP request
        console.log(msg);
        // Raise an Event
        this.emit('message' , {message : msg});
    }

}




// exports object
//module.exports.log = log;
//module.exports.endPoint = url;

// exports the function
//module.exports = log;
module.exports = Logger;

