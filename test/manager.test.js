const Manager = require('team-tracking-generator/lib/manager');

describe('user input for Managers', () => {

    test('adds data for office number', () => {
        const officeNumberData = '303-555-5555';
        const employeeData = new Manager('Monica',2,'monicayuh@fakeemail.com', officeNumberData);
        expect(employeeData.officeNumber).toBe(officeNumberData);
    });

    test('getOfficeNumber will return user input for officeNumber', () => {
        const officeNumberData = '303-555-5555';
        const employeeData = new Manager('Monica',2,'monicayuh@fakeemail.com', officeNumberData);
        expect(employeeData.getOfficeNumber()).toBe(officeNumberData);
    });

    test('getRole function should return "Engineer"', () =>{
        const check = new Manager('Monica',2,'monicayuh@fakeemail.com', '303-555-5555');
        expect(check.getRole()).toEqual('Manager');
    });
});