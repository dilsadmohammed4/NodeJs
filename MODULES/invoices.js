var h = require("./share");

// var invoicePageCount = h.pageCount;
// invoicePageCount = 45;


var invoicePageCount = h();
invoicePageCount.pageCount = 920;

var invoice = function () {
    console.log("In Invoices Modules");
    //sh.pageCount = 567;
    console.log("In Invoice Page Count: " + invoicePageCount.pageCount);
    console.log("In Invoice Page Count: " + invoicePageCount.pageSort);
}
//invoice();  //method is call here

// Carefully practice - top most thing you need in Node Js App.

module.exports.invoice = invoice;

//module.exports.in=invoice;