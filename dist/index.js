"use strict";
class Account {
    constructor(id, name, _balance) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
    }
    deposite(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0)
            throw new Error("invalid value");
        this._balance = value;
    }
}
let account = new Account(1, "sepideh", 0);
account.balance = 1;
console.log(account.balance);
//# sourceMappingURL=index.js.map