/**
 * Created by Tobias on 09.10.2016.
 */

class Student {
    fullName: string;
    constructor(public name, public middleName, public lastName) {
        this.fullName = this.name + ' ' + this.middleName + ' ' + this.lastName;
    }
}

interface Person {
    name: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.name + " "+person.lastName;
}

var user = new Student('Tobias', 'x', 'Klocker');

document.getElementById('ausgabeDiv').innerHTML = greeter(user);