const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const team = require('./src/team-template')

teamTrackerAry = []

function runTeamTracker () {
    function generateTeam (){
        inquirer.prompt([{
            type: 'list',
            message: 'Would you like to add one of the following employee roles to your team roster?',
            name: 'addEmployee',
            choices:['Manager', 'Engineer', 'Intern', 'Team Roster is complete.']
        }]).then(function(userInput){
            switch(userInput.generateTeam) {
                case 'Manager': addManager();
                break;
                case 'Engineer': addEngineer();
                break;
                case 'Intern': addIntern();
                break;
            }
            return buildHTML()
        })
    }
    function addManager(){
        inquirer.prompt ([
            {
                type: 'input',
                name: 'managerName',
                message: "Please enter the Manager's Name:",
            },

            {
                type: 'input',
                name: 'managerNumber',
                message: "Please enter the Manager's Number:",
            },

            {
                type: 'input',
                name: 'managerEmail',
                message: "Please enter the Manager's Email:",
            },

            {
                type: 'input',
                name: 'officeNumber',
                message: "Please enter the Manager's office number:",
            }

        ]).then(response => {
            const manager = new Manager(response.managerName, response.managerNumber, response.managerEmail, response.officeNumber);
            teamTrackerAry.push(manager);
            sendTeam();
        });
    }

    function addEngineer(){
        inquirer.prompt ([
            {
                type: 'input',
                name: 'engineerName',
                message: "Please enter the Engineer's Name:",
            },

            {
                type: 'input',
                name: 'engineerNumber',
                message: "Please enter the Engineer's Number:",
            },

            {
                type: 'input',
                name: 'engineerEmail',
                message: "Please enter the Engineer's Email:",
            },

            {
                type: 'input',
                name: 'engineerGithub',
                message: "Please enter the Engineer's github:",
            }
        ]).then(response => {
            const engineer = new Engineer(response.engineerName, response.engineerNumber, response.engineerEmail, response.engineerGithub);
            teamTrackerAry.push(engineer);
            sendTeam();
        });
    }

    function addIntern(){
        inquirer.prompt ([
            {
                type: 'input',
                name: 'internName',
                message: "Please enter the Intern's Name:",
            },

            {
                type: 'input',
                name: 'internNumber',
                message: "Please enter the Intern's Number:",
            },

            {
                type: 'input',
                name: 'internEmail',
                message: "Please enter the intern's Email:",
            },

            {
                type: 'input',
                name: 'internSchool',
                message: "Please enter the Intern's school:",
            }

        ]).then(response => {
            const intern = new Intern(response.internName, response.internNumber, response.internEmail, response.internSchool);
            teamTrackerAry.push(intern);
            sendTeam();
        }); 
    }
    function buildHTML (){
       console.log('Your Team has been created!'); 
       const outputDir= path.resolve(_dirname, 'output');
       const outputPath = path.join(outputDir, "team.html");
       fs.writeFileSync(outputPath, team(teamTrackerAry), "utf-8" )
    }

    sendTeam();
}

runTeamTracker();