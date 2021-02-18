const Employee = require("./employee");
const inquirer = require("inquirer");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
  }

  createEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the engineer's name?",
          name: "engineerName",
        },
        {
          type: "input",
          message: "Enter the engineer's employee ID.",
          name: "engineerID",
        },
        {
          type: "input",
          message: "Enter the engineer's email address.",
          name: "engineerEmail",
        },
        {
          type: "input",
          message: "Enter the engineer's GitHub username.",
          name: "engineerGitHub",
        },
      ])
      .then((response) => {
        console.log(response);
      });
  }
}

module.exports = Engineer;
