// Write pseudo code or JavaScript to implement a Factory Design Pattern.

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary);
    this.type = "Developer";
  }

  displayInfo() {
    return `${this.type}: Name: ${this.name}, Salary: $${this.salary}`;
  }
}

class Designer extends Employee {
  constructor(name, salary) {
    super(name, salary);
    this.type = "Designer";
  }

  displayInfo() {
    return `${this.type}: Name: ${this.name}, Salary: $${this.salary}`;
  }
}

class Product extends Employee {
  constructor(name, salary) {
    super(name, salary);
    this.type = "Product";
  }

  displayInfo() {
    return `${this.type}: Name: ${this.name}, Salary: $${this.salary}`;
  }
}

const createEmployeeButton = document.getElementById("createEmployee");
const employeeDetails = document.getElementById("employeeDetails");
const employees = [];

createEmployeeButton.addEventListener("click", () => {
  const employeeType = document.getElementById("employeeType").value;
  const name = document.getElementById("name").value;
  const salary = parseFloat(document.getElementById("salary").value);

  let employee;

  if (employeeType === "developer") {
    employee = new Developer(name, salary);
  } else if (employeeType === "designer") {
    employee = new Designer(name, salary);
  } else if (employeeType === "product") {
    employee = new Product(name, salary);
  }

  if (employee) {
    employees.push(employee);
    updateEmployeeList();
  }
});

function updateEmployeeList() {
  employeeDetails.innerHTML = "";
  // loop through each employee
  employees.forEach((employee) => {
    console.log(employee);
    const employeeInfo = document.createElement("p");
    employeeInfo.textContent = employee.displayInfo();
    employeeDetails.appendChild(employeeInfo);
  });

  console.log("Employee Array", employees);
}
