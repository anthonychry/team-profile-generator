const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }
    getRole() {
        this.role = 'Engineer'
        return this.role;
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;