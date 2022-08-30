//Packages
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const teamHTML = require('./src/team-template.js');
//Path for write html function
const distDir = path.resolve(__dirname, 'dist');
const distPath = path.join(distDir, "team.html");


teamTrackerAry = []

//function for inquirer prompting
function runTeamTracker () {
    function genTeam (){
        inquirer.prompt([{
            type: 'list',
            message: 'Would you like to add one of the following employee roles to your team roster?',
            name: 'addEmployee',
            choices:['Manager', 'Engineer', 'Intern', 'Team Roster is complete.']
        }]).then(function(userInput){
            switch(userInput.addEmployee) {
                case 'Manager': addManager();
                break;
                case 'Engineer': addEngineer();
                break;
                case 'Intern': addIntern();
                break;
                default: buildHTML();
            }
           
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
                name: 'managerId',
                message: "Please enter the Manager's ID Number:",
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
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.officeNumber);
            teamTrackerAry.push(manager);
            genTeam();
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
                name: 'engineerId',
                message: "Please enter the Engineer's ID Number:",
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
            const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
            teamTrackerAry.push(engineer);
            genTeam();
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
                name: 'internId',
                message: "Please enter the Intern's ID Number:",
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
            const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
            teamTrackerAry.push(intern);
            genTeam();
        }); 
    }
    //function to write html
    function buildHTML (){
       fs.writeFileSync(distPath, teamHTML(teamTrackerAry), (err) =>
      err ? console.log(err) : console.log('Team roster is complete.'))
    }

    genTeam();
}

//call necessary functions globally
runTeamTracker();