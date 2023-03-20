"use strict";
class ElectricBill {
    constructor(units, rate) {
        this.rate = rate;
        this.units = units;
    }
}
class Domestic extends ElectricBill {
    constructor(units) {
        super(units);
    }
    billDetails() {
        console.log("Domestic Electricity Bill ");
        console.log(`Total units:${this.units}`);
        console.log("Rate = " + (5 * this.units));
    }
}
class Commerical extends ElectricBill {
    constructor(units) {
        super(units);
    }
    billDetails() {
        console.log("\nCommercial Electricity Bill ");
        console.log(`Total units:${this.units}`);
        console.log("Rate = " + (10 * this.units));
    }
}
let x = new Domestic(125);
let y = new Commerical(275);
x.billDetails();
y.billDetails();
