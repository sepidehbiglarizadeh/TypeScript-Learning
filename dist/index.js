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
    getBalance() {
        return this._balance;
    }
}
let account = new Account(1, "sepideh", 0);
account.deposite(100);
console.log(account.getBalance());
//# sourceMappingURL=index.js.map