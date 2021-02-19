const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require("fs");

let htmlData = ``;

function createHTML(htmlData) {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Roster</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">My Team</span>
          </div>
        </nav>

        <div class="container">
          <div class="row">
          ${htmlData}
          </div>
        </div>
      </body>
    </html>`;
}

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
      const manager = new Manager(
        response.managerName,
        response.managerID,
        response.managerEmail,
        response.managerOffice
      );

      let newData = `<div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${manager.name}</h5>
          <svg class="bi" width="32" height="32" fill="currentColor">
            <use xlink:href="bootstrap-icons.svg#heart-fill" />
          </svg>
          <h6 class="card-subtitle mb-2">Manager</h6>
          <ul class="list-group">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item"><a href="mailto: ${manager.email}" class='btn btn-secondary' target="_blank">Email: ${manager.email}</a></li>
            <li class="list-group-item">Office Number: ${manager.officeNum}</li>
          </ul>
        </div>
      </div>`;
      htmlData += newData;
      if (response.moreMembers === "Engineer") {
        createEngineer();
      } else if (response.moreMembers === "Intern") {
        createIntern();
      } else {
        createHTML(htmlData);
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
      const engineer = new Engineer(
        response.engineerName,
        response.engineerID,
        response.engineerEmail,
        response.engineerGitHub
      );

      let newData = `<div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${engineer.name}</h5>
          <svg class="bi" width="32" height="32" fill="currentColor">
            <use xlink:href="bootstrap-icons.svg#heart-fill" />
          </svg>
          <h6 class="card-subtitle mb-2">Engineer</h6>
          <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item"><a href="mailto: ${engineer.email}" class='btn btn-secondary' target="_blank">Email: ${engineer.email}</a></li>
            <li class="list-group-item"><a href="https://github.com/${engineer.gitHub} class='btn btn-secondary'>GitHub: ${engineer.gitHub}</a></li>
          </ul>
        </div>
      </div>`;
      htmlData += newData;
      if (response.moreMembers === "Engineer") {
        createEngineer();
      } else if (response.moreMembers === "Intern") {
        createIntern();
      } else {
        createHTML(htmlData);
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
      const intern = new Intern(
        response.internName,
        response.internID,
        response.internEmail,
        response.internSchool
      );
      let newData = `<div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${intern.name}</h5>
          <svg class="bi" width="32" height="32" fill="currentColor">
            <use xlink:href="bootstrap-icons.svg#heart-fill" />
          </svg>
          <h6 class="card-subtitle mb-2">Intern</h6>
          <ul class="list-group">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item"><a href="mailto: ${intern.email}" class='btn btn-secondary' target="_blank">Email: ${intern.email}</a></li>
            <li class="list-group-item">School: ${intern.school}</li>
          </ul>
        </div>
      </div>`;
      htmlData += newData;
      if (response.moreMembers === "Engineer") {
        createEngineer();
      } else if (response.moreMembers === "Intern") {
        createIntern();
      } else {
        writeHTML(htmlData);
      }
    });
}

function writeHTML(htmlData) {
  fs.writeFile("./dist/index.html", createHTML(htmlData), (err) => {
    err ? console.log(err) : console.log("Success, HTML generated.");
  });
}

createManager();
