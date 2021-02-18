const Employee = require("./employee");
const inquirer = require("inquirer");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  createIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the intern's name?",
          name: "internName",
        },
        {
          type: "input",
          message: "Enter the intern's employee ID.",
          name: "internID",
        },
        {
          type: "input",
          message: "Enter the intern's email address.",
          name: "internEmail",
        },
        {
          type: "input",
          message: "Enter the intern's school.",
          name: "internSchool",
        },
      ])
      .then((response) => {
        console.log(response);
      });
  }
}

module.exports = Intern;
