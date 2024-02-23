var events = require('events');
var eventEmission = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmission.on('sceam', myEventHandler);

//Fire the 'scream' event:
eventEmission.emit('scream');