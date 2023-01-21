let age: number = 31;

if (age < 50) age += 10;

console.log(age);

// Types
let sales = 123_456_789;
let course = "TypeScript";
let isPublished = true;
let level;

// Array
let numbers: number[] = [1, 2, 3];

// Tuple
let user: [number, string] = [1, "sepideh"];

// Enum
enum Size {
  Small = "s",
  Medium = "m",
  Large = "l",
}

let mySize: Size = Size.Small;

// Function
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 50_000) return income * 1.2;
  return income * 1.3;
}
calculateTax(10_000);

// Object
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "sepideh",
  retire: (date: Date) => {
    console.log(date);
  },
};
