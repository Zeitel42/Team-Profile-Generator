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
        "Please select an employee to add. Select 'I'm finished' to exit and generate organizational chart.",
      choices: ["Engineer", "Intern", "I'm finished"],
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
      case "I'm finished":
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
        <div class="column is-2">
          <div class="card">
            <div class="card-content">
              <div class="media-content">
                <p class="title is-4 has-background-link-dark has-text-link-light">${data.name}
                <br>
                <span class="subtitle is-6 has-background-link-dark has-text-link-light">Engineer</span>
                <br>
                <span><svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,15C7.58,15 4,16.79 4,19V21H20V19C20,16.79 16.42,15 12,15M8,9A4,4 0 0,0 12,13A4,4 0 0,0 16,9M11.5,2C11.2,2 11,2.21 11,2.5V5.5H10V3C10,3 7.75,3.86 7.75,6.75C7.75,6.75 7,6.89 7,8H17C16.95,6.89 16.25,6.75 16.25,6.75C16.25,3.86 14,3 14,3V5.5H13V2.5C13,2.21 12.81,2 12.5,2H11.5Z" />
            </svg></span>
                </p>
              </div>
              <div class="content has-background-link-light has-text-link-dark">
                <p class="content">Employee Id:${data.id}</p>
                <p>Email: <a href="mailto:${data.email}">${data.email}</a></p>
                <p>Github: <a href="https://github.com/${data.github}">${data.github}</a></p>
              </div>
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
        <div class="column is-2">
          <div class="card">
            <div class="card-content">
              <div class="media-content">
                <p class="title is-4 is-centered has-background-info-dark has-text-info-light">${data.name}
                <br>
                <span class="subtitle is-6 is-centered has-background-info-dark has-text-info-light">Intern</span>
                <br>
                <span><svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M18 10.5V6L15.89 7.06C15.96 7.36 16 7.67 16 8C16 10.21 14.21 12 12 12C9.79 12 8 10.21 8 8C8 7.67 8.04 7.36 8.11 7.06L5 5.5L12 2L19 5.5V10.5H18M12 9L10 8C10 9.1 10.9 10 12 10C13.1 10 14 9.1 14 8L12 9M14.75 5.42L12.16 4.1L9.47 5.47L12.07 6.79L14.75 5.42M12 13C14.67 13 20 14.33 20 17V20H4V17C4 14.33 9.33 13 12 13M12 14.9C9 14.9 5.9 16.36 5.9 17V18.1H18.1V17C18.1 16.36 14.97 14.9 12 14.9Z" />
                </svg></span>
                </p>
              </div>
              <div class="content has-background-info-light has-text-info-dark">
                <p class="content">Employee Id:${data.id}</p>
                <p>Email: <a href="mailto:${data.email}">${data.email}</a></p>
                <p>School: ${data.school}</p>
              </div>
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
