var user1 = { userName: "rahim", userId: 101 };
var user2;
user2 = { userName: "Islam", userId: 102 };
var user3;
user3 = { userName: "karim", userId: 103 };
var user4;
user4 = [{ userName: "bakul", userId: 104 }, { userName: "tutul", userId: 105 }];
// optional
var user5;
user5 = { userName: "Islam" };
var users;
users = [];
users.push(user1, user2, user3, user4, user5);
// console.log(users)
for (var key in users) {
    console.log(users[key]["userName"]);
}
