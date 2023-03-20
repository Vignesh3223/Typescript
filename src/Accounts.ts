interface SavingAccount {
    Accno: number,
    name: string,
    balance: number
    Balance: () => void
}
interface CurrentAccount {
    Accno: number,
    name: string,
    balance: number
    Balance: () => void
}

class Account implements SavingAccount, CurrentAccount {
    Accno: number
    name: string
    balance: number
    constructor(Accno: number, name: string, balance: number) {
        this.Accno = Accno
        this.name = name
        this.balance = balance
    }
    Balance() {
        console.log("Account number: " + this.Accno + "\n " + "Name :" + this.name + " \n" + "Balance : " + this.balance)
    }
}
let s = new Account(40145223679, 'Venkit', 5000)
let c = new Account(40145225801, 'Vimal', 15000)
s.Balance();
c.Balance();