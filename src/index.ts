class Person {
  constructor(public firstName: string, public lastName: string) {}

  walk() {
    console.log("walking");
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log("taking a test");
  }
}

const student = new Student(1, "sepi", "bg");

console.log(student.fullName);

