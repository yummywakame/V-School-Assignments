// Array that will hold all employees
var employees = []

// Constructor function for creating each employee
function Employee(name, jobTitle, salary, status) {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status || "Full Time"
}

// Prototype function for Employee Constructor that prints
// employee info to the console eg:
// "Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time"
Employee.prototype.printEmployeeForm = function() {
    console.log(
    'Name: ' + this.name +
    ', Job Title: ' + this.jobTitle +
    ', Salary: ' + this.salary +
    ', Status: ' + this.status
    )
}

// Instantiate 3 employees
// Override the status attribute of one of them to either "Part Time" or "Contract"
var bob = new Employee("Bob", "V School Instructor", "$3000/hour", "Part Time")
var helen = new Employee("Helen", "V School TA", "$15/hour")
var mark = new Employee("Mark", "V School Administrator", "$35/hour", "Contract")

// Call the printEmployeeForm method for each employee
bob.printEmployeeForm()
helen.printEmployeeForm()
mark.printEmployeeForm()

// Call the printEmployeeForm method for each employee
employees.push(bob)
employees.push(helen)
employees.push(mark)

// Put the generated employees into the employees array using whichever method you prefer.
console.log(employees)