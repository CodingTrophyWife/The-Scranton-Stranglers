// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");



class Manager extends Employee {
    constructor(name,Id,email,officeNum){
        super(name,Id,email);
        this.officeNum=officeNum;
    }
    getofficeNum() {
        return this.officeNum
    }
    getjobTitle() {
        return "Manager"
    }
}




module.exports = Manager;