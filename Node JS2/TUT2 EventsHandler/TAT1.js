var events = require('events');
var eventEmitter = new events.EventEmitter();
var myHandler = function () {

    console.log('Hello From Event Handler');

    eventEmitter.emit('event2');
}
var add = function (a, b) {

    c = a + b;
    console.log('Sum:' + c);
}
eventEmitter.on('event3', function () {
    console.log("In Event 3 Function.")
});
eventEmitter.on('event4', function (a, b) {
    c = a + b;
    console.log("Sum:" + c);
});


// Here we can call event as our wish 1st 2nd or last or anywhere
eventEmitter.emit('event4', 8, 9);
eventEmitter.on('event1', myHandler);
eventEmitter.emit('event1');
eventEmitter.emit('event3');