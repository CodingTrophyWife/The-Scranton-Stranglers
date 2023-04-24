const { writeFile } = require("fs").promises;
const generator = require("./util/generateHtml");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHtml = require("./util/generateHtml");

const team = [];
const baseQuestions = [
    {
        name: "name",
        message:"What is their name?",
        type: "input"
    },
    {
        name: "id",
        message: "What is their employee number?",
        type: "input"
    },
    {
        name: "email",
        message: "What is their Email?",
        type: "input",
    }
];

function askQuestion() {
    inquirer.prompt([
        {
            type: "list",
            message: "Who would you like to add?",
            name: 'question',
            choices: ['Manager','Engineer','Intern','Finish']
        }
    ]).then(answers => {
        switch (answers.question) {
            case "Manager":
                baseQuestions.push(
                    {
                        name: "office",
                        message: "What is their office number?",
                        type: "input"
                    }
                );
                addManager(baseQuestions);
                break;
            case "Engineer":
                baseQuestions.push(
                    {
                        name: "username",
                        message: "What is their github username?",
                        type: "input"
                    }
                );
                addEngineer(baseQuestions);
                break;
            case "Intern":
                baseQuestions.push(
                    {
                        name: "school",
                        message: "What is their school?",
                        type: "input"
                    }
                );
                addIntern(baseQuestions);
                break;
            default:
                console.log("Finished building team, generating html");
                writeFile("index.html", generator(team))
                .then(() => console.log("Successfully wrote file"))
                .catch((err) => console.error(err));
                break;
        };
    });
}

function addManager(questions) {
    inquirer.prompt(questions)
    .then(answers => {
        const name = answers.name;
        const id = answers.id;
        const email = answers.email;
        const office = answers.office;
        const member = new Manager(name, id, email, office);
        team.push(member);
        baseQuestions.pop();
        askQuestion();
    });  
}

function addEngineer(questions) {
    inquirer.prompt(questions)
    .then(answers => {
        const name = answers.name;
        const id = answers.id;
        const email = answers.email;
        const username = answers.username;
        const member = new Engineer(name, id, email, username);
        team.push(member);
        baseQuestions.pop();
        askQuestion();
    });    
}

function addIntern(questions) {
    inquirer.prompt(questions)
    .then(answers => {
        const name = answers.name;
        const id = answers.id;
        const email = answers.email;
        const school = answers.school;
        const member = new Intern(name, id, email, school);
        team.push(member);
        baseQuestions.pop();
        askQuestion();
    });   
}

askQuestion();
    