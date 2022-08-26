class User {
    // properties, method, contractor
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

    display() {
        console.log(`userName: ${this.userName}, age: ${this.age}`)
    }
}

//object
let user1 = new User("karim", 21)
user1.display();

let user2 = new User("karim", 21)
user1.display();

export { };


