const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "manager",
    message: "Enter manager's name",
  },
  {
    type: "list",
    name: "employee",
    message: "Which employee would you like to add?",
    choices: ["Engineer", "Intern"],
  },
];
inquirer.prompt(questions);
