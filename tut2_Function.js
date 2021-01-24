// Objects

var courses = {
    name: "Node",
    decs: "This is a NodeJs Practice",
    cost: "230"
}
console.log(courses);
console.log(courses.decs);




// Function

function getCourse() {

    console.log("Getting all courses");
}
getCourse();

// Function with parameter

function getMyCourse(course) {

    console.log("Course Name: " +
        course);
}
getMyCourse("Mathematics");




// Ananymous Function


var getUsers = function () {

    console.log("this is user1.")
    console.log("this is user2.")


}

function displayUsers(funcName) {
    funcName();
}

displayUsers(getUsers); //Passing a function as parameter beacause it is a ananymous function



//Arrow Function

var getParameter = (id) => {

    console.log("Inside the arrow function: " + id);
}
getParameter("Dilsad");
getParameter(1234);