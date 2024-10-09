import { Component, OnInit } from '@angular/core';
import { SalaryService } from '../services/salary.service';
import { EmployeeService } from '../services/employee.service';
import { Salary, Employee } from '../models';

@Component({
  selector: 'app-salaries',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.css']
})
export class SalariesComponent implements OnInit {
  salaries: Salary[] = [];
  employees: Employee[] = []; // Store the list of employees
  newSalary: Omit<Salary, 'id'> = {
    employeeId: 0,
    amount: 0,
    currency: 'USD'
  };
  editSalaryId: number | null = null;

  constructor(private salaryService: SalaryService, private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadSalaries();
    this.loadEmployees(); 
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees; 
    });
  }

  loadSalaries(): void {
    this.salaryService.getSalaries().subscribe(salaries => {
      this.salaries = salaries; 
    });
  }

  addSalary(): void {
    if (this.newSalary.amount && this.newSalary.employeeId) {
      const salaryToAdd: Salary = {
        id: 0, // ID will be generated by the server
        ...this.newSalary
      };

      this.salaryService.addSalary(salaryToAdd).subscribe(() => {
        this.loadSalaries(); // Refresh the list
        this.resetForm();
      });
    }
  }

  editSalary(salary: Salary): void {
    this.newSalary = { employeeId: salary.employeeId, amount: salary.amount, currency: salary.currency };
    this.editSalaryId = salary.id;
  }

  updateSalary(): void {
    if (this.editSalaryId) {
      this.salaryService.updateSalary({ id: this.editSalaryId, ...this.newSalary })
        .subscribe(() => {
          this.loadSalaries(); // Refresh the list
          this.resetForm();
        });
    }
  }

  deleteSalary(id: number): void {
    this.salaryService.deleteSalary(id).subscribe(() => {
      this.loadSalaries(); // Refresh the list
    });
  }

  resetForm(): void {
    this.newSalary = {
      employeeId: 1,
      amount: 0,
      currency: 'USD'
    };
    this.editSalaryId = null;
  }
}