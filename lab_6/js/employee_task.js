/********************************Task 9******************************/
class Employee {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

class EmployeeManagement extends Employee {
    constructor() {
        super();
        this.employeeList = [];
    }

    addEmployee(firstName, lastName, salary) {
        const newEmployee = new Employee(firstName, lastName, salary);
        this.employeeList.push(newEmployee);
    }

    removeEmployee(firstName, lastName) {
        this.employeeList = this.employeeList.filter(employee => {
            return !(employee.firstName === firstName && employee.lastName === lastName);
        });
    }

    getEmployee(firstName, lastName) {
        return this.employeeList.find(employee => {
            return employee.firstName === firstName && employee.lastName === lastName;
        });
    }

    saveToJSON() {
        const jsonData = JSON.stringify(this.employeeList, null, 2);
        const blob = new Blob([jsonData], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "employeeData.json";
        a.click();
        URL.revokeObjectURL(url);
    }

    loadFromJSON(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const jsonData = e.target.result;
            this.employeeList = JSON.parse(jsonData);
            console.log("Employee data loaded from JSON file.");
        };
        reader.readAsText(file);
    }
}



/***********************OUTPUTS***********************/
const empManagement = new EmployeeManagement();
console.log("Task 9")
empManagement.addEmployee("Ed", "Doe", 5900);
empManagement.addEmployee("Ann", "Smith", 7000);
console.log("List ->\n", empManagement.employeeList);
empManagement.removeEmployee("Ed", "Doe");
console.log("List(deleted) ->\n", empManagement.employeeList);
const employeeInfo = empManagement.getEmployee("Ann", "Smith");
console.log("Ann info ->\n", employeeInfo);

empManagement.saveToJSON();
console.log(empManagement.employeeList);
