//use employee class
const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return 'Engineer';
    }
}

//make the class usable in other JS files
module.exports = Engineer;