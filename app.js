function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var john = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(getFullName(john));
;
var Employee = /** @class */ (function () {
    function Employee(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    Employee.prototype.toJson = function () {
        return JSON.stringify(this);
    };
    return Employee;
}());
var employee = new Employee('John', 'Doe');
console.log(employee.toJson());
