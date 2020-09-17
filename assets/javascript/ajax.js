var employeesAPI = 'https://jsonplaceholder.typicode.com/comments?&_limit=3';

function deserializeResponse(response) {
  return response.json();
}

function createEmployeeElement(employee) {
  var employeeElement = document.createElement('li');
  employeeElement.classList.add('employee');

  var employeeNameElement = document.createElement('div');
  employeeNameElement.classList.add('name');
  employeeNameElement.innerText = employee.name;

  var pElement = document.createElement('p');

  var pInnerHtml3 = `<span>Age: ${employee.age}</span> <span>Salary: ${employee.salary}</span>`;

  pElement.innerHTML = pInnerHtml3;

  var removeElement = document.createElement('button');
  removeElement.classList.add('remove');
  removeElement.innerText = 'X';
  employeeElement.dataset.id = employee.id
  removeElement.addEventListener('click', removeEmployee);

  employeeElement.appendChild(employeeNameElement);
  employeeElement.appendChild(pElement);
  employeeElement.appendChild(removeElement);

  return employeeElement;
}
function listEmployees(employees) {
  // console.log(employees);
  var agendaElement = document.querySelector('.agenda');
  for (var i = 0; i < employees.length; i++) {
    var employeeElement = createEmployeeElement(employees[i]);
    agendaElement.appendChild(employeeElement);
  }
}
function getEmployees() {
  fetch(employeesAPI)
    .then(deserializeResponse)
    .then(listEmployees);
}
function addEmployee(e) {
  e.preventDefault();
  var $inpName = document.querySelector('input[name="name"]');
  var $inpAge = document.querySelector('input[name="age"]');
  var $inpSalary = document.querySelector('input[name="salary"]');
  fetch(employeesAPI, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: $inpName.value,
      age: $inpAge.value,
      salary: $inpSalary.value,
    })
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var employee = {
        name: $inpName.value,
        age: $inpAge.value,
        salary: $inpSalary.value,
      };
      var employeeElement = createEmployeeElement(employee);
      employeeElement.dataset.id = data.id;
      var agendaElement = document.querySelector('.agenda');
      agendaElement.appendChild(employeeElement);
    })
}



function removeEmployee(event) {
  var parentEmployee = event.target.parentElement;
  parentEmployee.remove()
  var deteleThisName = parentEmployee.querySelector('.name').innerHTML;
  console.log('delete this Employee: ' + deteleThisName);
  var id = parentEmployee.dataset.id;
  console.log('Delete ID:' + ' ' + id);
}
function onDOMLoad() {
  getEmployees();
  var addEmployeeElement = document.querySelector('.add-btn');
  addEmployeeElement.addEventListener('click', addEmployee);
}
document.addEventListener('DOMContentLoaded', onDOMLoad);
