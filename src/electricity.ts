abstract class ElectricBill {
    public rate?: number;
    public units: number;
    constructor(units: number, rate?: number) {
        this.rate = rate;
        this.units = units;
    }
    public abstract billDetails(): number;
}
class Domestic extends ElectricBill {
    constructor(units: number) {
        super(units)
    }
    public billDetails(): any {
        console.log("Domestic Electricity Bill ")
        console.log(`Total units:${this.units}`)
        console.log("Rate = " + (5 * this.units))

    }
}
class Commerical extends ElectricBill {
    constructor(units: number) {
        super(units)
    }
    public billDetails(): any {
        console.log("\nCommercial Electricity Bill ");
        console.log(`Total units:${this.units}`)
        console.log("Rate = " + (10 * this.units))
    }

}
let x = new Domestic(125);
let y = new Commerical(275);
x.billDetails();
y.billDetails();