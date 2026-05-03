import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeList from './EmployeeList.jsx';

const root = createRoot(document.getElementById('content'));

root.render(
  <React.StrictMode>
    <EmployeeList />
  </React.StrictMode>
);