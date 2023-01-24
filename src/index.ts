class Account {
  id: number;
  name: string;
  balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }

  deposite(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this.balance += amount;
  }
}

let account = new Account(1, "sepideh", 0);
account.deposite(100);
console.log(account.balance);
