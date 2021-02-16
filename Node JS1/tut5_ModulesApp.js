//Function

var inv = require("./MODULES/invoices");
var us = require("./MODULES/users");
var or = require("./MODULES/orders");
inv.invoice();
//inv.in();

// Variable

userActive = 0;
console.log(userActive);
console.log(us.userActive);


// Class

var o = new or.Orders();
o.setOrderId(56789);