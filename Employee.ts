enum Gender {
    male,
    female,
    other
}
class Employee {
    name: string
    gender: Gender
    birthday: Date
    email: string
    phone_number?: string
    constructor(name: string, gender: Gender, birthday: Date, email: string, phone_number?: string) {
        this.name = name
        this.gender = gender
        this.birthday = birthday
        this.email = email
        this.phone_number = phone_number
    }
}
function displayEmployee (employee: Employee) {
    console.log(employee)
}
let employee_arr: Employee[] = []
employee_arr.push(new Employee("Nguyen Van A", Gender.male, new Date("1990-09-19"), "anguyen@gmail.com", "0123456789"))
employee_arr.push(new Employee("Nguyen Van A", Gender.male, new Date("1990-09-19"), "anguyen@gmail.com", "0123456789"))
employee_arr.push(new Employee("Nguyen Van A", Gender.male, new Date("1990-09-19"), "anguyen@gmail.com"))
employee_arr.forEach(displayEmployee)