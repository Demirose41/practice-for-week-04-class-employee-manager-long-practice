const Employee = require('./employee');

module.exports = class Manager extends Employee {
    constructor(name, salary, title, manager = null){
        super(name, salary, title, manager);
        this.employees = [];
    }

    addEmployee(employee){
        this.employees.push(employee);
    }
}