// CREATE AN ARRAY OF EMPLOYEES
let form = document.getElementById('addForm');
let emptable = document.getElementById('employees');
let employeeCountOutput = document.getElementById('empCount');

// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
const STORAGE_KEY = 'employees';

// Input fields (these IDs are typical for this lab — adjust if yours differ)
const idInput = document.getElementById('id');
const nameInput = document.getElementById('name');
const extInput = document.getElementById('extension');
const emailInput = document.getElementById('email');
const deptInput = document.getElementById('department');

// GET DOM ELEMENTS
let initialEmployees = [
  { id: 12341234, name: "Alia Bhatt", extension: 1234, email: "alia.bhatt@gmail.com", department: "Engineering" },
  { id: 11223344, name: "Jane Smith", extension: 5678, email: "jane.smith@sdsu.com", department: "Executive" },
  { id: 33221144, name: "Robert Johnson", extension: 9101, email: "robert.johnson@gmail.com", department: "Marketing" },
  { id: 66557744, name: "Emily Davis", extension: 1122, email: "emily.davis@outlook.com", department: "Sales" },
  { id: 23412389, name: "Michael Brown", extension: 3344, email: "michael.brown@ok.com", department: "Sales" }
];

let employees = initialEmployees;

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
document.addEventListener('DOMContentLoaded', () => {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (stored) {
    employees = JSON.parse(stored);
  } else {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
  }

  buildGrid();
  idInput.focus();
});

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const id = Number(idInput.value.trim());
    const name = nameInput.value.trim();
    const extension = Number(extInput.value.trim());
    const email = emailInput.value.trim();
    const department = deptInput.value;

    // Prevent duplicate IDs
    if (employees.some(emp => emp.id === id)) {
      return alert('That Employee ID already exists.');
    }

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    const newEmployee = { id, name, extension, email, department };

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee);

    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    idInput.focus();

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    const target = e.target;

    // Only act if they clicked a delete button
    if (!target.classList.contains('btn-delete')) return;
    // CONFIRM THE DELETE
    const ok = confirm('Are you sure you want to delete this employee?');
    if (!ok) return;

    const empId = Number(target.dataset.id);

        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

        // REMOVE EMPLOYEE FROM ARRAY
        const index = employees.findIndex(emp => emp.id === empId);
        if (index !== -1) employees.splice(index, 1);

        // BUILD THE GRID
        buildGrid();

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    const tbody = empTable.querySelector('tbody');
    if (!tbody) return;
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    tbody.innerHTML = '';

    // LOOP THROUGH THE ARRAY OF EMPLOYEES AND REBUILD ROW STRUCTURE
    for (const emp of employees) {
      const tr = document.createElement('tr');

      tr.innerHTML = `
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.extension}</td>
        <td>${emp.email}</td>
        <td>${emp.department}</td>
        <td>
          <button class="btn btn-sm btn-danger btn-delete" data-id="${emp.id}">
            Delete
          </button>
        </td>
      `;

      // Use appendChild() to append constructed row to tbody
      tbody.appendChild(tr);
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT
    employeeCountOutput.textContent = `(${employees.length})`;

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));

};