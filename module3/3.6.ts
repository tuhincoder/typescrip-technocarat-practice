{
    //
    class BankAccount {
        public readonly id: number;
        public name: string;
        private _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        // setter 
        set deposit(amount: number) {
            this._balance = this._balance + amount;
        }

        // getter
        // addBalance(amount: number) {
        //     this._balance = this._balance + amount;
        // }

        // getBalance() {
        //     return this._balance
        // }

        // gettter 
        get balance() {
            return this._balance;
        }
    }


    const richManBalance = new BankAccount(123, 'tuhin', 100)
    richManBalance.deposit = 300;
    // const myAddBalance = richManBalance.addBalance(123)
    const myAddBalance = richManBalance.balance;
    console.log(myAddBalance);









    //
}