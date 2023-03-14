"use strict";
class Employee {
    constructor(empid, empname, des, salary, project) {
        this.empid = empid;
        this.empname = empname;
        this.des = des;
        this.salary = salary;
        this.project = project;
    }
    displayempdetails() {
        console.log(`Employee ID : ` + this.empid);
        console.log(`Employee Name : ` + this.empname);
        console.log(`Designation : ` + this.des);
        console.log(`Salary : ` + this.salary);
        console.log(`Project : ` + this.project);
    }
}
let employee = new Employee(1011, 'Adhi', "Designer", 27000, "Typescript");
employee.displayempdetails();
