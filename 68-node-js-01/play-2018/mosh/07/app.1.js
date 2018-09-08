let  EventEmmiter = require('events');
const emmiter = new EventEmmiter();

// listener
emmiter.on('go' , function(data) {
    console.log('go 1', data);
})
emmiter.addListener('go' , (data) => console.log('data 2', data));

// listener with parameters
emmiter.on('go' , function(args) {
    console.log('Event args: 3 ', args);
})



// raise event go
emmiter.emit('go' , "abc");

// parameters
// 1.
emmiter.emit('go' , "abc" , 1 , new Date());
// 2.
emmiter.emit('go' ,{ id: 10 , url : 'http://www.lalala.co.il' , note: 'bla bla'} );

