function getUserInfo() {

    setTimeout(() => {

        console.log("User info will be returned.");
    }, 10000);
}

function getUserContacts() {
    console.log("Returns contacts of user.")
}

try {
    console.log("Get user info.")
} catch (ex) {
    console.log("User not found.")
} finally {
    console.log("Return user.")
}
getUserContacts();