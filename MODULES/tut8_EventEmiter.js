var events = require("events");
var eventEmitter = new events.EventEmitter();

// Should these javascripts events? No - They are not javascript events.
// These are Custom Events.


// 1. Event Definition
// 2. Invoking / callong the events.
// 3. We can pass parameter -> Can we pass parameter to this method?
//Spread Operator
eventEmitter.on("updateStudent", (a, b) => {

    console.log("Value event invoked");
    console.log("Reading Data " + a + b);
});
eventEmitter.on("deleteStudent", () => {

    console.log("Custome event invoked");
});

eventEmitter.emit("deleteStudent");

eventEmitter.emit("updateStudent", 35, 67);