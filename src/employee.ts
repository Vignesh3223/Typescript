class Employee {
    public empid : number;
    public empname : string;
    public des : string;
    public salary : number | string;
    public project : string; 
    constructor(empid:number, empname:string, des:string, salary:number|string,  project:string){
        this.empid = empid;
        this.empname = empname;
        this.des = des;
        this.salary = salary;
        this.project = project;
    }
    public displayempdetails(){
        document.write(`Employee ID : `+this.empid);
        document.write(`Employee Name : `+this.empname);
        document.write(`Designation : `+this.des);
        document.write(`Salary : `+this.salary);
        document.write(`Project : `+this.project);
    }
}
let employee = new Employee(1011, 'Adhi', "Designer", 27000, "Typescript");
employee.displayempdetails();