// Global module 1st ;

var url = require("url");

// then custome module.

var item = require("./MODULES/tut7_ALL");

// Variable declaration.

const urlLink = "http://localhost:50/get?year=2020&month=aug&day=26";

// Instance declaration.

const ob = new item.items(); //Object of class item.


const urlObj = url.parse(urlLink);


// Logic Processing.

ob.getItems();
ob.viewItem();


console.log(urlObj.query);
console.log(urlObj.port);