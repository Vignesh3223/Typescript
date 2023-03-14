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
var Course = /** @class */ (function () {
    function Course(courseId, courseName) {
        this.courseId = courseId;
        this.courseName = courseName;
    }
    Course.prototype.courseDetails = function () {
        console.log("Course id is : " + this.courseId);
        console.log("Course name is : " + this.courseName);
    };
    return Course;
}());
var Employee1 = /** @class */ (function (_super) {
    __extends(Employee1, _super);
    function Employee1(courseId, courseName, empId, empName, empDesignation) {
        var _this = _super.call(this, courseId, courseName) || this;
        _this.empId = empId;
        _this.empName = empName;
        _this.empDesignation = empDesignation;
        return _this;
    }
    Employee1.prototype.employeeDetails = function () {
        console.log("Employee ID is :" + this.empId);
        console.log("Employee name is : " + this.empName);
        console.log("Employee Designation is : " + this.empDesignation);
    };
    return Employee1;
}(Course));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(courseId, courseName, empId, empName, empDesignation, adminId, adminName) {
        var _this = _super.call(this, courseId, courseName, empId, empName, empDesignation) || this;
        _this.adminId = adminId;
        _this.adminName = adminName;
        return _this;
    }
    Admin.prototype.adminDetails = function () {
        obj.courseDetails();
        obj.employeeDetails();
        console.log("AdminId is : " + this.adminId);
        console.log("Admin name is : " + this.adminName);
    };
    return Admin;
}(Employee1));
var obj = new Admin("101", "BCA", "E102", "Raju", "Developer", "A101", "Ravi");
obj.adminDetails();
