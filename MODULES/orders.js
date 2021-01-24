var sh = require("./share");

class Orders {

    id = "";
    setOrderId(id) {
        console.log("In order")
        console.log("Order is Received: " + id);
        console.log("Page Count: " + sh.pageCount);
    }
    showOrder() {

    }
}
module.exports.Orders = Orders;