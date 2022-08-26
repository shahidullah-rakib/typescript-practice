// import { studentName as name, studentAge } from './student';

import * as student from "./student";

function displayStudentInfo(): void {
    // console.log(`Name: ${name} age: ${studentAge}`);
    console.log(`Name: ${student.studentName} age: ${student.studentAge}`);
}

displayStudentInfo();