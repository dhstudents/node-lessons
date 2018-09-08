const Logger = require('./logger');

const EventEmmiter = require('events');
//const emmiter = new EventEmmiter();

// different object



// log('Hello logger');
const logger = new Logger();

logger.on('message' , (args) => console.log('Listener called show args:', args));
logger.log('Hello logger');