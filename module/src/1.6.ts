function add(num1: number, num2: number = 0) {
    return num1 + num2;
}

add(23, 5)


const addArrow = (num1: number, num2: number): number => num1 + num2;

// ------------
const richUser = {
    name: 'tuhin',
    balance: 38485,
    addNewBalance(balance: number) {
        return `my new balance ${this.balance + balance}`
    }

}


const poorMan = {
    name: 'unknown',
    balance: 0,
    newBalance(balance: number) {
        return this.balance + balance;
    }
}


const arr: number[] = [1, 2, 3]

// const newArray: number[] = arr.map((elm: number): number => elm * elm) 
// const newArray :number[] = arr.map((elem : number): number =>elem * elem )
// const newArray: number[] = arr.map((elm: number): number => elm * elm)
const newArray: number[] = arr.map((elm: number): number => elm * elm)
