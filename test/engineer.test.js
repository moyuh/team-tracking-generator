const Engineer = require('.../lib/engineer');

describe('user input for engineers', () => {

    test('creates a github', () => {
        const githubData = 'moyuh';
        const employeeData = new Engineer('Monica',2,'monicayuh@fakeemail.com', githubData);
        expect(employeeData.github).toBe(githubData);
    });

    test('getGithub will return user input for github', () => {
        const githubData = 'moyuh';
        const employeeData = new Engineer('Monica',2,'monicayuh@fakeemail.com', githubData);
        expect(employeeData.getGithub()).toBe(githubData);
    });

    test('getRole function should return "Engineer"', () =>{
        const check = new Engineer('Monica',2,'monicayuh@fakeemail.com', 'moyuh');
        expect(check.getRole()).toEqual('Engineer');
    });
});