var setName = {

    getName: function (courseName) {
        console.log(this); //---Here this refers to objects.
    }
}

setName.getName("Node Js");


//Refers to Variable


class myName {

    name = "";
    getName() {
        this.name = "MEAN Stack";
        console.log("In get Name");
        console.log(this.name);


    }
    showName() {

        this.getName();
        console.log("In Show Name")
    }
}

var obj = new myName();
//obj.getName();
obj.showName();