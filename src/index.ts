class Account {
  nickname?: string;

  constructor(
    public readonly id: number,
    public name: string,
    private _balance: number
  ) {}

  deposite(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    if (value < 0) throw new Error("invalid value");
    this._balance = value;
  }
}

let account = new Account(1, "sepideh", 0);
// account.deposite(100);
account.balance = 1;
console.log(account.balance);
