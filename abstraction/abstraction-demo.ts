abstract class User {
    // properties, method, contractor
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

    abstract display(): void;
}

class Student extends User {
    studentId: number;

    constructor(userName: string, age: number, studentId: number) {
        super(userName, age)
        this.studentId = studentId;
    }

    display() {
        console.log(`userName: ${this.userName}, age: ${this.age}, id: ${this.studentId}`)
    }

}

let student1 = new Student("rahim", 31, 101);
student1.display();


export { };


