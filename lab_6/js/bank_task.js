/**********************************Task 8*********************************/
class BankAccount {
    constructor(balance = 0) {
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount} into the account.`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    withdrawal(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from the account.`);
        } else {
            console.log("Invalid withdrawal amount or insufficient balance.");
        }
    }

    getBalance() {
        return this.balance;
    }
}

const myAccount = new BankAccount(230);



/*****************************OUTPUTS******************************/
console.log("Task 8");
console.log("Initial balance -> ", myAccount.getBalance());
myAccount.deposit(20); 
console.log("Current balance after deposit:", myAccount.getBalance());
myAccount.withdrawal(50);
console.log("Current balance after withdrawal:", myAccount.getBalance()); 