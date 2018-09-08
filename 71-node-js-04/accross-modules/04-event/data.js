const fs = require('fs');
const EventEmitter = require('events');
class GiveData extends EventEmitter {
    getNumbers(ddobj) {
        fs.readFile('./numbers.dat' , function(err , data) {
            if (err) {
                ddobj.emit('model' ,err);
               // process.exit();
            }
          //  console.log(data.toString().split('\r\n'));
          //  ddobj.emit('model' , data)
        });
    };
}
const obj = new GiveData();
module.exports.getData = obj;