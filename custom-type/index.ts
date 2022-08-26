type user = { userName: string, userId: number } | object | object[];

let user1: user;
user1 = { userName: "rahim", userId: 101 }

let user2: user;
user2 = { userName: "Islam", userId: 102 }

let user3: user;;
user3 = { userName: "karim", userId: 103 }

let user4: user;;
user4 = [{ userName: "bakul", userId: 104 }, { userName: "tutul", userId: 105 }]

// optional
let user5: user;
user5 = { userName: "Islam" }

let users: object[];
users = [];

users.push(user1, user2, user3, user4, user5)

console.log(users)

// for (const key in users) {
//     console.log(users[key]["userName"])
// }

type Request = "GET" | "POST";
let getRequest: Request;
getRequest = "GET";

function requestHandelar(requestType: Request) {
    console.log(requestType)
}
requestHandelar("GET")

export { };