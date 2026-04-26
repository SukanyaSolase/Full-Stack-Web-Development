const employees = [
  { id: 1, name: "John Smith", job: "Manager" },
  { id: 2, name: "Alice Johnson", job: "Developer" },
  { id: 3, name: "Michael Brown", job: "Designer" }
];

function EmployeeList() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Employees"),
    React.createElement(
      "ul",
      null,
      employees.map((employee) =>
        React.createElement(
          "li",
          { key: employee.id },
          `${employee.name} - ${employee.job}`
        )
      )
    )
  );
}

ReactDOM.render(
  React.createElement(EmployeeList),
  document.getElementById("root")
);