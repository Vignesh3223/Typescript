class Course {
    courseId?: number | string;
    courseName: string;
    constructor(courseId: number | string, courseName: string) {
        this.courseId = courseId;
        this.courseName = courseName;
    }
    courseDetails() {
        console.log("Course Id : " + this.courseId);
        console.log("Course name : " + this.courseName);
    }
}

class Employee1 extends Course {
    empId?: number | string;
    empName: string;
    empDesignation: string;
    constructor(courseId: number | string, courseName: string, empId: number | string, empName: string, empDesignation: string) {
        super(courseId, courseName);
        this.empId = empId;
        this.empName = empName;
        this.empDesignation = empDesignation;
    }
    employeeDetails() {
        console.log("Employee ID :" + this.empId);
        console.log("Employee name : " + this.empName);
        console.log("Employee Designation : " + this.empDesignation);
    }
}

class Admin extends Employee1 {
    adminId?: number | string;
    adminName: string;
    constructor(courseId: number | string, courseName: string, empId: number | string, empName: string, empDesignation: string, adminId: number | string, adminName: string) {
        super(courseId, courseName, empId, empName, empDesignation);
        this.adminId = adminId;
        this.adminName = adminName;
    }
    adminDetails() {
        admin.courseDetails();
        admin.employeeDetails();
        console.log("Admin Id : " + this.adminId);
        console.log("Admin name : " + this.adminName);
    }
}

let admin = new Admin("S123", "JAVA", "J063", "Raya", "Developer", "A121", "Kiran");
admin.adminDetails();