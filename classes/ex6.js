// bank account class (validation + logic)
// prevent negative balance 


class BankAccount {
    constructor() {
        this.balance = 0;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
            return;
        }
        this.balance -= amount;
    }
}

const account = new BankAccount();
account.deposit(1000);
account.withdraw(300);
account.withdraw(800); // should show insufficient funds
console.log(account.balance);