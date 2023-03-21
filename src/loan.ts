class Customer {
    public Name: string
    public Age: number
    public Address: String
    public Conatct: number
    constructor(name: string, age: number, address: string, contact: number) {
        this.Name = name;
        this.Age = age;
        this.Address = address;
        this.Conatct = contact
    }
    public display() {
        console.log("Customer Name : " + this.Name + "\n" + "Age : " + this.Age + "\n" + "Address : " + this.Address + "\n" + "Contact Number : " + this.Conatct + "\n")
    }
}
class Loan extends Customer {
    public loanaccountno: number
    public loantype: string
    public loanamt: number
    public duration: number
    constructor(name: string, age: number, address: string, contact: number, accno: number, ltype: string, lamt: number, dur: number) {
        super(name, age, address, contact);
        this.loanaccountno = accno;
        this.loantype = ltype;
        this.loanamt = lamt;
        this.duration = dur;
    }
    public interestcalculate(interest?: any, total?: any) {
        interest = this.loanamt / this.duration;
        total = this.loanamt + interest;
    }
    public display(): void {
        super.display();
        console.log("Account Number : " + this.loanaccountno + "\n" + "Loan type : " + this.loantype + "\n" + "Loan Amount : " + this.loanamt + "\n" +
            "Duration : " + this.duration + "\n")
        console.log(`Interest to be Paid :  + $(interest)`)
        console.log(`Total Amount to be Paid :  + $(total)`);

    }
}
let loan = new Loan('Rajesh', 32, '4B,Meco Gardens,Kanuvai', 9366052147, 12115, 'Personal', 200000, 24)
loan.display();