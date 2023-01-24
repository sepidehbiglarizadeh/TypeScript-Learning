"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    walk() {
        console.log("walking");
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("taking a test");
    }
}
class Teacher extends Person {
    get fullName() {
        return "professor" + ' ' + super.fullName;
    }
}
const student = new Student(1, "sepi", "bg");
const teacher = new Teacher("sepi", "bg");
console.log(teacher.fullName);
//# sourceMappingURL=index.js.map