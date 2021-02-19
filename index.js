const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

function createManager() {
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
        name: "managerOffice",
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

function createEngineer() {
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

function createIntern() {
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

createManager();
