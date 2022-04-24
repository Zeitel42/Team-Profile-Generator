const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./assets/js/manager");
const Engineer = require("./assets/js/engineer");
const Intern = require("./assets/js/intern");

const generateData = require("./assets/js/generateHTML");
// console.log(generateData);

const internArray = [];
let manager;
let intern;

const managerPrompts = [
  {
    type: "input",
    name: "name",
    message: "Enter manager's name",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("please enter your manager's name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "Enter manager's employee ID",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("please enter your manager's ID!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter manager's email",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("please enter your manager's email!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "office",
    message: "Enter manager's office number",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("please enter your manager's office number!");
        return false;
      }
    },
  },
];

// function with a switch statement to choose which employee to add or to be finished
function employeePrompts() {
  const employeeChoice = [
    {
      type: "list",
      name: "employee",
      message:
        "Please select an employee to add from the list. Once all of your employees are added, select 'Finish' to generate organizational chart.",
      choices: ["Engineer", "Intern", "Finish"],
    },
  ];

  inquirer.prompt(employeeChoice).then((name) => {
    // const employee = new Engineer();
    const val = Object.values(name).shift().toString();

    //switch statement to handle employee choice
    switch (val) {
      case "Engineer":
        engineerPrompts();
        break;
      case "Intern":
        // console.log("Intern prompts");
        internPrompts();
        break;
      case "Finish":
        console.log("Writing HTML file...");
        generateHTML();
        break;
    }
  });
}
let engineer;
const engineerArray = [];
let engineerHTML = [];
let internHTML = [];
//function to add engineers
const engineerPrompts = () => {
  const questions = [
    {
      type: "input",
      name: "name",
      message: "What is the engineer's name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("please enter your engineer's name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is the engineer's ID?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("please enter your engineer's ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is the engineer's email?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("please enter your engineer's email!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "What is the engineer's Github username?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("please enter your engineer's Github username!");
          return false;
        }
      },
    },
  ];
  inquirer.prompt(questions).then(({ name, id, email, github }) => {
    engineer = new Engineer(name, id, email, github);
    // console.log(engineer);
    engineerArray.push({ name, id, email, github });

    // console.log(engineerArray);
    engineerHTML = engineerArray.map(function (data) {
      return ` 
      <div class="card">
        <div class="card-content">
          <div class="media-content">
            <p class="title is-4 is-centered has-background-link-dark has-text-link-light">${data.name}</p>
            <p class="subtitle is-6">Engineer</p>
          </div>
          <div class="content has-background-link-light has-text-link-dark">
            <p class="content">Employee Id:${data.id}</p>
            <p>Email: <a href="${data.email}">${data.email}</a></p>
            <p>Github: <a href="https://github.com/${data.github}">${data.github}</a></p>
          </div>
        </div>
      </div>
        `;
    });
    engineerHTML = engineerHTML.join(" ");

    if (
      engineer.name != "" &&
      engineer.id > 0 &&
      engineer.email != "" &&
      engineer.github != ""
    ) {
      employeePrompts();
    }
  });
};

// function to add interns
const internPrompts = () => {
  const questions = [
    {
      type: "input",
      name: "name",
      message: "What is the new intern's name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("please enter your intern's name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is the new intern's ID?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("please enter your intern's ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is the new intern's email?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("please enter your intern's email!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "school",
      message: "What school does/did the new intern attend?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("please enter your intern's school!");
          return false;
        }
      },
    },
  ];
  inquirer.prompt(questions).then(({ name, id, email, school }) => {
    intern = new Intern(name, id, email, school);
    // console.log(intern);
    internArray.push({ name, id, email, school });
    internArray.join(" ");
    // console.log(internArray);
    internHTML = internArray.map(function (data) {
      return ` 
      <div class="card">
      <div class="card-content">
        <div class="media-content">
          <p class="title is-4 is-centered has-background-info-dark has-text-info-light">${data.name}</p>
          <p class="subtitle is-6">Intern</p>
        </div>
        <div class="content has-background-info-light has-text-info-dark">
          <p class="content">Employee Id:${data.id}</p>
          <p>Email: <a href="${data.email}">${data.email}</a></p>
          <p>School: ${data.school}</p>
        </div>
      </div>
    </div>
        `;
    });
    internHTML = internHTML.join(" ");
    if (
      intern.name != "" &&
      intern.id > 0 &&
      intern.email != "" &&
      intern.school != ""
    ) {
      employeePrompts();
    }
  });
};

// function to finish and write HTML
const generateHTML = () => {
  fs.writeFile(
    "./assets/index.html",
    generateData(manager, engineerHTML, internHTML),
    (err) => {
      if (err) throw new Error(err);
    }
  );
};
// console.log(manager.name, manager.id, manager.email, manager.office);

const init = () => {
  inquirer.prompt(managerPrompts).then(({ name, id, email, office }) => {
    manager = new Manager(name, id, email, office);
    // console.log({ name, id, email, office });
    employeePrompts();
  });
};
init();

module.exports = employeePrompts;
