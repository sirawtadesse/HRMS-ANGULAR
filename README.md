# Angular HRMS with In-Memory Web API
# Overview
This project is a Human Resource Management System built using Angular, a popular TypeScript-based framework for creating web applications. It leverages the in-memory web API to provide a mock backend for development and testing purposes.

# Features
# Employee Management:
Create, update, and delete employee records.
View employee profiles, including personal information, job details, and contact details.
Search for employees by various criteria (e.g., name, department, position).
# Department Management:
Create, update, and delete department records.
Assign employees to departments and view department hierarchies.

# Technologies Used
Angular: A framework for building web applications using TypeScript.
In-Memory Web API: A mock backend for development and testing.
TypeScript: A typed superset of JavaScript for improved code maintainability.
HTML and CSS: For creating the user interface.
Angular Material: A UI component library for building consistent and responsive interfaces.
Installation and Setup
# Clone the Repository:
Bash
git clone https://github.com/sirawtadesse/HRMS-ANGULAR.git
Use code with caution.

# Install Dependencies:
Bash
cd angular-hrms
npm install
Use code with caution.

# Run the Development Server:
Bash
ng serve
Use code with caution.

The application will be available at http://localhost:4200.
# API Endpoints
The in-memory web API provides mock data for the following endpoints:

# Employees:
GET /api/employees: Retrieves all employees.
POST /api/employees: Creates a new employee.
PUT /api/employees/:id: Updates an existing employee.
DELETE /api/employees/:id: Deletes an employee.   
# Departments:
GET /api/departments: Retrieves all departments.
POST /api/departments: Creates a new department.
PUT /api/departments/:id: Updates an existing department.
DELETE /api/departments/:id: Deletes a department.

# Contributions to this project are welcome! Please feel free to fork the repository, make changes, and submit a pull request.
