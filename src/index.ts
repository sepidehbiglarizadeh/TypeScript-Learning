class Account {
  readonly id: number;
  name: string;
  private _balance: number;
  nickname?: string;

  constructor(id: number, name: string, _balance: number) {
    this.id = id;
    this.name = name;
    this._balance = _balance;
  }

  deposite(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }

  getBalance(): number {
    return this._balance;
  }
}

let account = new Account(1, "sepideh", 0);
account.deposite(100);
console.log(account.getBalance());
