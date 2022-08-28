const Engineer = require('.../lib/engineer');

describe('user input for engineers', () => {

    test('creates a github', () => {
        const githubData = new Engineer();
        const employeeData = new Engineer('Monica',2,'monicayuh@fakeemail.com', githubData);
        expect(employeeData.github).toBe(githubData);
    });

    test()
});