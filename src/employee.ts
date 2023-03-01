class Employee {
    public empid!: number | string;
    public empname! : string;
    public des! : string;
    public salary! : number | string;
    public project! : string; 
    constructor(empid:number|string, empname:string, des:string, salary:number|string,  project:string){
        this.empid = empid;
        this.empname = empname;
        this.des = des;
        this.salary = salary;
        this.project = project;
    }
    public displayempdetails(){
        document.write(`Employee ID : `+this.empid);
        document.write(`Employee ID : `+this.empid);
    }
}