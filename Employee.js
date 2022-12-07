var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
    Gender[Gender["other"] = 2] = "other";
})(Gender || (Gender = {}));
var Employee = /** @class */ (function () {
    function Employee(name, gender, birthday, email, phone_number) {
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phone_number = phone_number;
    }
    return Employee;
}());
function displayEmployee(employee) {
    console.log(employee);
}
var employee_arr = [];
employee_arr.push(new Employee("Nguyen Van A", Gender.male, new Date("1990-09-19"), "anguyen@gmail.com", "0123456789"));
employee_arr.push(new Employee("Nguyen Van A", Gender.male, new Date("1990-09-19"), "anguyen@gmail.com", "0123456789"));
employee_arr.push(new Employee("Nguyen Van A", Gender.male, new Date("1990-09-19"), "anguyen@gmail.com"));
employee_arr.forEach(displayEmployee);
