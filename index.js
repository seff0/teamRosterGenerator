const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// initialize inquirer

function managerPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the manager's name for this team?",
        name: "managerName",
      },
      {
        type: "input",
        message: "Enter the managers' employee ID.",
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
        engineerPrompt();
      } else if (response.moreMembers === "Intern") {
        internPrompt();
      } else {
        createHTML();
      }
    });
}

function engineerPrompt() {
  console.log("make an engineer");
}

function internPrompt() {
  console.log("make an intern");
}

managerPrompt();
