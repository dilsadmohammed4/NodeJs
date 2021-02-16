'use strict'

class People {
    //name='';

    setName(name) {
        this.name = name;
    }
    showName() {
        console.log(this.name);
    }
}
const myPeople = new People();
myPeople.setName("Dilsad Mohammed");
myPeople.showName();
myPeople.setName("Dilsad");
myPeople.showName();