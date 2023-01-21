"use strict";
let age = 31;
if (age < 50)
    age += 10;
console.log(age);
let sales = 123456789;
let course = "TypeScript";
let isPublished = true;
let level;
let numbers = [1, 2, 3];
let user = [1, "sepideh"];
var Size;
(function (Size) {
    Size["Small"] = "s";
    Size["Medium"] = "m";
    Size["Large"] = "l";
})(Size || (Size = {}));
let mySize = Size.Small;
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 50000)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000);
let employee = {
    id: 1,
    name: "sepideh",
    retire: (date) => {
        console.log(date);
    },
};
//# sourceMappingURL=index.js.map