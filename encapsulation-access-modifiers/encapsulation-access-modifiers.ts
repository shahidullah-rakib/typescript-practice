class User {
    // properties, method, contractor
    public userName: string;
    public age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

    display(): void {
        console.log(`userName: ${this.userName}, age: ${this.age}`)
    }
}

class Student extends User {
    protected studentId: number;

    constructor(userName: string, age: number, studentId: number) {
        super(userName, age)
        this.studentId = studentId;
    }

    display() {
        console.log(`userName: ${this.userName}, age: ${this.age}, id: ${this.studentId}`)
    }

    setStudentId(studentId: number): void {
        this.studentId = studentId;
    }

    getStudentId(): number {
        return this.studentId;
    }

}

let student1 = new Student("rahim", 31, 101);
student1.setStudentId(1302002022)
let studentId: number = student1.getStudentId();

console.log(studentId)

let user1 = new User('robi', 101)
user1.userName = "pinki";

// console.log(user1);

export { };


