let user1 = { userName: "rahim", userId: 101 }

let user2: { userName: string, userId: number }
user2 = { userName: "Islam", userId: 102 }

let user3: object;
user3 = { userName: "karim", userId: 103 }

let user4: object[];
user4 = [{ userName: "bakul", userId: 104 }, { userName: "tutul", userId: 105 }]

// optional
let user5: { userName: string, userId?: number }
user5 = { userName: "Islam" }

let users: object[];
users = [];

users.push(user1, user2, user3, user4, user5)

// console.log(users)

for (const key in users) {
    console.log(users[key]["userName"])
}