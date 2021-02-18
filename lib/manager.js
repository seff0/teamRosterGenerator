const Employee = require("./employee");
const inquirer = require("inquirer");

class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
  }

  createManager() {
    inquirer.prompt([
      {
        type: "input",
        message: "What is the manager's name?",
        name: "managerName",
      },
      {
        type: "input",
        message: "Enter the manager's employee ID.",
        name: "managerID",
      },
      {
        type: "input",
        message: "Enter the manager's email address.",
        name: "managerEmail",
      },
      {
        type: "input",
        message: "Enter the office number.",
        name: "managerName",
      },
    ]);
    //   .then((response) => {
    //     console.log(response);
    //   });
  }
}

module.exports = Manager;
