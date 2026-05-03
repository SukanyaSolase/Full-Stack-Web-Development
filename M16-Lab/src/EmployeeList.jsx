import React from 'react';
import EmployeeFilter from './EmployeeFilter.jsx';
import EmployeeAdd from './EmployeeAdd.jsx';
import { Button, Modal } from 'react-bootstrap';

class EmployeeRow extends React.Component {
  constructor() {
    super();

    this.state = {
      modalVisible: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  toggleModal() {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  }

  deleteEmployee() {
    this.props.deleteEmployee(this.props.employee.id);
    this.toggleModal();
  }

  render() {
    const employee = this.props.employee;

    return (
      <tr>
        <td>{employee.name}</td>
        <td>{employee.extension}</td>
        <td>{employee.email}</td>
        <td>{employee.title}</td>
        <td>{employee.dateHired}</td>
        <td>{employee.currentlyEmployed ? 'Yes' : 'No'}</td>
        <td>
          <Button variant="danger" onClick={this.toggleModal}>
            X
          </Button>

          <Modal show={this.state.modalVisible} onHide={this.toggleModal}>
            <Modal.Header closeButton>
              <Modal.Title>Delete Employee?</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              Are you sure you want to delete this employee?
            </Modal.Body>

            <Modal.Footer>
              <Button variant="danger" onClick={this.toggleModal}>
                Cancel
              </Button>

              <Button variant="success" onClick={this.deleteEmployee}>
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
        </td>
      </tr>
    );
  }
}

function EmployeeTable(props) {
  const employeeRows = props.employees.map(employee => (
    <EmployeeRow
      key={employee.id}
      employee={employee}
      deleteEmployee={props.deleteEmployee}
    />
  ));

  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Extension</th>
          <th>Email</th>
          <th>Title</th>
          <th>Date Hired</th>
          <th>Currently Employed</th>
          <th>Delete</th>
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
    this.deleteEmployee = this.deleteEmployee.bind(this);
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

  deleteEmployee(id) {
    this.setState({
      employees: this.state.employees.filter(employee => employee.id !== id),
    });
  }

  render() {
    return (
      <div className="container mt-4">
        <h1>Employee Management System</h1>

        <EmployeeFilter />

        <hr />

        <EmployeeTable
          employees={this.state.employees}
          deleteEmployee={this.deleteEmployee}
        />

        <hr />

        <EmployeeAdd createEmployee={this.createEmployee} />
      </div>
    );
  }
}