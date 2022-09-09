//required files
const createHTML = require('./src/createHTML.js')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// node modules 
const fs = require('fs');
const inquirer = require('inquirer');


const teamArr = [];

///Manager prompts
const managerQuestions = [{
    type: "input",
    message: "What is the manager's name?",
    name: "name",
}, {
    type: "input",
    message: "What is the manager's id?",
    name: "id",
}, {
    type: "input",
    message: "What is the manager's email?",
    name: "email",
}, {
    type: "input",
    message: "What is the manager's officenumber?",
    name: "officeNumber",
}]

//employee (Intern and engineer) prompts
const employeeQuestions = [{
        type: 'list',
        name: 'role',
        message: "Please choose your employee's role",
        choices: ['Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'name',
        message: "What is the name of the employee?",

    },
    {
        type: 'input',
        name: 'id',
        message: "What is the employee's ID?",

    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email address?",

    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's github?",
        when: (input) => input.role === "Engineer",

    },
    {
        type: 'input',
        name: 'school',
        message: "What school does then intern attend?",
        when: (input) => input.role === "Intern",

    },
    {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to add another team member?',
        default: false
    }
]

//creates new manager object using constructor function
const addManager = () => {
    return inquirer.prompt(managerQuestions)
        .then(managerResponse => {
            const { name, id, email, officeNumber } = managerResponse;
            const manager = new Manager(name, id, email, officeNumber);

            teamArr.push(manager);
            console.log(manager);
        })
};

//creates new employee object using constructor function(creates either intern or engineer based on data pased to it)
const addEmployee = () => {

    return inquirer.prompt(employeeQuestions)
        .then(employeeData => {
            // data for employee types 

            let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);
                console.log(employee);
            } else if (role === "Intern") {
                employee = new Intern(name, id, email, school);
                console.log(employee);
            }

            teamArr.push(employee);

            if (confirmAddEmployee) {
                return addEmployee(teamArr);
            } else {
                return teamArr;
            }
        })

};


// function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
            // when the profile has been created 
        } else {
            console.log("Index.html has been created!")
        }
    })
};

addManager()
    .then(addEmployee)
    .then(teamArr => {
        return createHTML(teamArr);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });