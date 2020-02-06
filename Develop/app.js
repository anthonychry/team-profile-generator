const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Generate = require('./generate');

const members = [];


//inquirer to add or stop questioning for build team
function teamAdder() {
inquirer
.prompt ([
    {
        type: "confirm",
        message: "Do you want to add another team member?",
        name: "add"
    }
]).then(function (response) {
    const { add } = response;
    if (add) {
        teamBuilder();
    } else {
        $("<body>").text(engineersCard(members));
        $("<body>").text(internsCard(members));
        $("<body>").text(managersCard(members));
        return members;
    }
});
}


//questions to detail out each team member
function teamBuilder() { 
inquirer
.prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your title?",
        name: "title"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    }
]).then(function(response) {
    const { name, title, email } = response;
    let github;
    let school;
    let office;
    let count;

    if (title === "engineer") {
        inquirer.prompt([
            {
                type: "input",
                message: "What is your Github username?",
                name: "github"
            }
        ]).then(function(response) {
            github = response.github;
            const engineer = new Engineer(name, 1, email, github);
            engineer.getRole();
            members.push(engineer);
            teamAdder();
        });
    }
    else if (title === "intern") {
        inquirer.prompt([
            {
                type: "input",
                message: "What school do you attend?",
                name: "school"
            }
        ]).then(function(response) {
            school = response.school;
            members.push(new Intern(name, 1, email, school));
            teamAdder();
        });
    }
    else {
        inquirer.prompt([
            {
                type: "input",
                message: "What's your office phone number?",
                name: "office"
            }
        ]).then(function(response) {
            office = response.office;
            console.log(office);
            members.push(new Manager(name, 1, email, office));
            teamAdder();
        });
    }


});
};

teamBuilder();
