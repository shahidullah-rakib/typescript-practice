"use strict";
// import { studentName as name, studentAge } from './student';
exports.__esModule = true;
var student = require("./student");
function displayStudentInfo() {
    // console.log(`Name: ${name} age: ${studentAge}`);
    console.log("Name: ".concat(student.studentName, " age: ").concat(student.studentAge));
}
displayStudentInfo();
