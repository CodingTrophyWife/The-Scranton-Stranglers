const inquirer = require("inquirer");
const fs = require('fs');
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


const answers =[];

const promptQuestions = [
    {
      type: 'list',
      message: 'Who would you like to add?',
      name: 'role',
      choices: [
        'Manager',
        'Engineer',
        'Intern',
      ]
    },{
      type: 'input',
      message: `What is the employee name?`,
      name: 'name',
    },{
      type: 'input',
      message: `What is the employee ID number?`,
      name: 'id'
    },{
      type: 'input',
      message: `What is the employee email?`,
      name: 'email'
    }]

    function newEmployee(){
        inquirer.prompt(promptQuestions)
        .then(function ({name, id, email, role}) {
          let extra = '';
          if (role === 'Manager') {
              extra = 'office number';
          } else if (role === 'Engineer') {
              extra = 'Github username';
          } else {
              extra = 'school';
          }

        inquirer.prompt([{
            message: `What is the employee's ${extra}?`,
            name: 'extra',
            },{
            message: 'Would you like to add another employee?',
            name: 'newEmployee',
            type: 'confirm',
            }])
            
            .then(function({extra, newEmployee}) {
                let emp;
                if (role === 'Manager') {
                    emp = new Manager(name, id, email, extra);
                } else if (role === 'Engineer') {
                    emp = new Engineer(name, id, email, extra);
                } else if(role === 'Intern'){
                    emp = new Intern(name, id, email, extra);
                }
                handleAnswers.push(emp);
                console.log(handleAnswers)
                if (newEmployee === true) {
                    createEmployee();
                } else {
                    finished(handleAnswers);
                };
            })
          })}; 