interface Person {
    firstName: string;
    lastName: string;
}

function getFullName(person: Person) {
    return `${person.firstName} ${person.lastName}`;
}

let john: Person = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(getFullName(john));

interface Json {
    toJson(): string
};

class Employee implements Json {
    firstName: string;
    lastName: string;

    constructor(fname: string,
        lname: string) {
        this.firstName = fname;
        this.lastName = lname;
    }

    toJson(): string {
        return JSON.stringify(this);
    }
}

let employee = new Employee('John', 'Doe');
console.log(employee.toJson());