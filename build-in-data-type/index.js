"use strict";
exports.__esModule = true;
var userId;
var firstName;
var lastName;
var fullName;
var isActive;
userId = 101;
firstName = "shahidullah";
lastName = " rakib";
fullName = firstName.concat(lastName);
// fullName = firstName + lastName;
isActive = true;
console.log("your id ".concat(userId, ", userName : ").concat(firstName, " ").concat(lastName, " "));
console.log(fullName);
console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.toLocaleUpperCase());
//non return
function display() {
    console.log('Hi i am display');
}
display();
