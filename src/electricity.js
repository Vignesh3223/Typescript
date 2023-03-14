var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EBill = /** @class */ (function () {
    function EBill(units, rate) {
        this.rate = rate;
        this.units = units;
    }
    return EBill;
}());
var Domestic = /** @class */ (function (_super) {
    __extends(Domestic, _super);
    function Domestic(units) {
        return _super.call(this, units) || this;
    }
    Domestic.prototype.bill = function () {
        throw new Error("Method not implemented.");
    };
    Domestic.prototype.billDetails = function () {
        console.log("Domestic Electricity Bill ");
        console.log("Total units:".concat(this.units));
        console.log("total Rate = " + (5 * this.units));
    };
    return Domestic;
}(EBill));
var Commerical = /** @class */ (function (_super) {
    __extends(Commerical, _super);
    function Commerical(units) {
        return _super.call(this, units) || this;
    }
    Commerical.prototype.bill = function () {
        throw new Error("Method not implemented.");
    };
    Commerical.prototype.billDetails = function () {
        console.log("\nCommercial Electricity Bill ");
        console.log("Total units:".concat(this.units));
        console.log("Rate = " + (10 * this.units));
    };
    return Commerical;
}(EBill));
var x = new Domestic(125);
var y = new Commerical(275);
x.bill();
y.bill();
