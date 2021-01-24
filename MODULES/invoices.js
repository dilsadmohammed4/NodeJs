var sh = require("./share");

var invoice = function () {
    console.log("In Invoices Modules");
    sh.pageCount = 567;
    console.log("Page Count: " + sh.pageCount)
}
//invoice();  //method is call here

// Carefully practice - top most thing you need in Node Js App.

module.exports.invoice = invoice;

//module.exports.in=invoice;