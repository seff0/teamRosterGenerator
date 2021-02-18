const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const manager = new Manager();

manager
  .createManager()

  .then(console.log(manager.createManager().response));

function newEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        choices: ["Engineer", "Intern", "I am done adding team members."],
        message: "Would you like to add another team member?",
        name: "moreMembers",
      },
    ])
    .then((response) => {
      if (response.moreMembers === "Engineer") {
        const engineer = new Engineer();
        engineer.createEngineer();
      } else if (response.moreMembers === "Intern") {
        const intern = new Intern();
        intern.createIntern();
      } else {
        createHTML();
      }
    });
}
