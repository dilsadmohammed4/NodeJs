class items {

    itemCode = 10;
    getItems() {
        console.log("Get all items.");
    }

    viewItem() {
        const itemVal = this.itemCode * 25;
        console.log("Final item value: " + itemVal);
        console.log("Viewing item.");
    }
}

module.exports.items = items;