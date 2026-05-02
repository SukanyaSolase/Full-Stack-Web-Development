import React from 'react';
import EmployeeFilter from './EmployeeFilter.jsx';
import EmployeeAdd from './EmployeeAdd.jsx';

function EmployeeRow(props) {
  const employee = props.employee;

  return (
    <tr>
      <td>{employee.id}</td>
      <td>{employee.name}</td>
      <td>{employee.extension}</td>
      <td>{employee.email}</td>
      <td>{employee.title}</td>
      <td>{employee.dateHired}</td>
      <td>{employee.currentlyEmployed ? 'Yes' : 'No'}</td>
    </tr>
  );
}

function EmployeeTable(props) {
  const employeeRows = props.employees.map(employee => (
    <EmployeeRow key={employee.id} employee={employee} />
  ));

  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Extension</th>
          <th>Email</th>
          <th>Title</th>
          <th>Date Hired</th>
          <th>Currently Employed</th>
        </tr>
      </thead>
      <tbody>{employeeRows}</tbody>
    </table>
  );
}

export default class EmployeeList extends React.Component {
  constructor() {
    super();

    this.state = {
      employees: [],
    };

    this.createEmployee = this.createEmployee.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    const employees = [
      {
        id: 1,
        name: 'John Doe',
        extension: 1234,
        email: 'john@example.com',
        title: 'Manager',
        dateHired: '2022-01-15',
        currentlyEmployed: true,
      },
      {
        id: 2,
        name: 'Jane Smith',
        extension: 5678,
        email: 'jane@example.com',
        title: 'Developer',
        dateHired: '2023-03-10',
        currentlyEmployed: true,
      },
    ];

    this.setState({ employees });
  }

  createEmployee(employee) {
    employee.id = this.state.employees.length + 1;

    this.setState({
      employees: [...this.state.employees, employee],
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Employee Management System</h1>
        <EmployeeFilter />
        <hr />
        <EmployeeTable employees={this.state.employees} />
        <hr />
        <EmployeeAdd createEmployee={this.createEmployee} />
      </React.Fragment>
    );
  }
}