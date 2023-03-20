"use strict";
class Account {
    constructor(Accno, name, balance) {
        this.Accno = Accno;
        this.name = name;
        this.balance = balance;
    }
    Balance() {
        console.log("Account number: " + this.Accno + "\n " + "Name :" + this.name + " \n" + "Balance : " + this.balance);
    }
}
let s = new Account(40145223679, 'Venkit', 5000);
let c = new Account(40145225801, 'Vimal', 15000);
s.Balance();
c.Balance();
