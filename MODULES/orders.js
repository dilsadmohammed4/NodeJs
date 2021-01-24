var sh = require("./share");
// var orderPageCount = sh.pageCount;
// orderPageCount = 20;
var orderPageCount = sh();
orderPageCount.pageCount = 70;

class Orders {

    id = "";
    setOrderId(id) {
        console.log("In order")
        console.log("Order is Received: " + id);
        console.log("In order Page Count: " + orderPageCount.pageCount);
        console.log("In order Page Count: " + orderPageCount.pageSort);

    }
    showOrder() {

    }
}
module.exports.Orders = Orders;