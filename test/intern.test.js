const Intern = require('.../lib/intern');

describe('user input for interns', () => {

    test('adds data for school', () => {
        const schoolData = 'Denver University';
        const employeeData = new Intern('Monica',2,'monicayuh@fakeemail.com', schoolData);
        expect(employeeData.school).toBe(schoolData);
    });

    test('getSchool will return user input for school', () => {
        const schoolData = 'moyuh';
        const employeeData = new Intern('Monica',2,'monicayuh@fakeemail.com', schoolData);
        expect(employeeData.getSchool()).toBe(schoolData);
    });

    test('getRole function should return "Intern"', () =>{
        const check = new Intern('Monica',2,'monicayuh@fakeemail.com', 'Denver University');
        expect(check.getRole()).toEqual('Intern');
    });
});