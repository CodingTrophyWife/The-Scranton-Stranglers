// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");


class Engineer extends Employee {
    constructor(name,Id,email,userName){
        super(name, Id, email)
        this.userName=userName;
    }
    getuserName() {
        return this.userName
    }
    getjobTitle() {
        return "Engineer"
    }
}





module.exports = Engineer;