const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

function createEmployee() {
  inquirer
    .prompt([
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
      {
        type: "list",
        choices: ["Engineer", "Intern", "I am done adding team members."],
        message: "Would you like to add another team member?",
        name: "moreMembers",
      },
    ])
    .then((response) => {
      if (response.moreMembers === "Engineer") {
        createEngineer();
      } else if (response.moreMembers === "Intern") {
        createIntern();
      } else {
        createHTML();
      }
    });
}
