function getUserInfo() {

    setTimeout(() => {

        console.log("User info will be returned.");
    }, 10000);
}

function getUserContacts() {
    console.log("Returns contacts of user.")
}
getUserInfo();
getUserContacts();