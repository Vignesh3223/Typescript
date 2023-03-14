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
      console.log(`Employee ID : `+this.empid);
      console.log(`Employee Name : `+this.empname);
      console.log(`Designation : `+this.des);
      console.log(`Salary : `+this.salary);
      console.log(`Project : `+this.project);
    }
}
let employee = new Employee(1011, 'Adhi', "Designer", 27000, "Typescript");
employee.displayempdetails();