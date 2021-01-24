function getUserInfo() {

    setTimeout(() => {

        console.log("User info will be returned.");
    }, 10000);
}

function getUserContacts() {
    console.log("Returns contacts of user.");
}

var user = new Promise((resolv, reject) => {

    // Write Logic Here
    console.log("Getting user Info.")


    // Either resolve or reject
    resolv("Return user info.");

    //reject("Failed to return user.");

}).then((data) => {
    getUserContacts();
}).catch((e) => {
    console.log(e);
});