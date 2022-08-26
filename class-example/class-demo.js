"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("userName: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return User;
}());
//object
var user1 = new User("karim", 21);
user1.display();
var user2 = new User("karim", 21);
user1.display();
