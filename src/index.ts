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

class Teacher extends Person {
  override get fullName(): string {
    return "professor" + " " + super.fullName;
  }
}

function printNames(people: Person[]) {
  for (let person of people) console.log(person.fullName);
}

printNames([
  new Student(1, "sepi", "bg"),
  new Teacher("mohamad", "seyedAghayi"),
]);

