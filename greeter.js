/**
 * Created by Tobias on 09.10.2016.
 */
var Student = (function () {
    function Student(name, middleName, lastName) {
        this.name = name;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = this.name + ' ' + this.middleName + ' ' + this.lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.name + " " + person.lastName;
}
var user = new Student('Tobias', 'x', 'Klocker');
document.getElementById('ausgabeDiv').innerHTML = greeter(user);
