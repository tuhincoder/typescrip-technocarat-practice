{
    //

    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        addDeposit(amount: number) {
            this._balance = this._balance + amount;
        }

        getBalance() {
            return this._balance;
        }

    }

    class StudentAccount extends BankAccount {
        test(amount: number) {
            this._balance = this._balance + amount;
        }
    }
    const richManBalance = new BankAccount(123, 'Mr. Richman', 200)
    // richManBalance.balance = 737;
    richManBalance.addDeposit(22)
    const myBalance = richManBalance.getBalance()
    console.log(myBalance);











    //
}