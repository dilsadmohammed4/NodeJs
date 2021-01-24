class Name {

    getName1() {

        console.log("No name.")
    }
    getName2(nm) {
        this.nm = nm;
        console.log(this.nm);

    }

}

module.exports.Name = Name;
// const nmo = new Name();
// nmo.getName1();
// nmo.getName2("Ankit kumar sahooo");