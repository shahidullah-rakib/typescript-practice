let userId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActive: boolean;

userId = 101;
firstName = "shahidullah";
lastName = " rakib";
fullName = firstName.concat(lastName);
// fullName = firstName + lastName;
isActive = true;

console.log(`your id ${userId}, userName : ${firstName} ${lastName} `);
console.log(fullName);

console.log(fullName.split(" "))
console.log(fullName.toUpperCase())
console.log(fullName.toLowerCase())
console.log(fullName.toLocaleUpperCase())

//non return
function display(): void {
    console.log('Hi i am display')
}

display();


export { };