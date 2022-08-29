const Employee = require('team-tracking-generator/lib/employee');

describe('user input for employees', () => {
    test('create an object of data for all added employees', () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe('object');
    });
    test('creates an array of "employee" objects', () => {
        const employee = new Employee('Monica',2,'monicayuh@fakeemail.com');
        expect(employee).toEqual({'name':'Monica', 'id': 2, 'email': 'monicayuh@fakeemail.com'});
    });
    test('the getRole function should return the "Employee" class', () => {
        const check = new Employee('Sangkuk',3,'sangkuk@fakeemail.com');
        expect(check.getRole()).toEqual('Employee')
    });
});

