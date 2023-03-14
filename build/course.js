"use strict";
class Course {
    constructor(courseId, courseName) {
        this.courseId = courseId;
        this.courseName = courseName;
    }
    courseDetails() {
        console.log("Course Id : " + this.courseId);
        console.log("Course name : " + this.courseName);
    }
}
class Employee1 extends Course {
    constructor(courseId, courseName, empId, empName, empDesignation) {
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
    constructor(courseId, courseName, empId, empName, empDesignation, adminId, adminName) {
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
