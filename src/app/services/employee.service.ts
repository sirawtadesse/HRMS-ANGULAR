import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee, Department, Company, Salary } from '../models';
import { IdGeneratorService } from './id-generator.service'; 

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'api/employees'; 
  private departmentsUrl = 'api/departments';
  private companiesUrl = 'api/companies';
  private salariesUrl = 'api/salaries';

  constructor(private http: HttpClient, private idGenerator: IdGeneratorService) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.departmentsUrl);
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companiesUrl);
  }

  getSalaries(): Observable<Salary[]> {
    return this.http.get<Salary[]>(this.salariesUrl);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    const newEmployee = { ...employee, id: this.idGenerator.generateEmployeeId() }; // Assign unique ID
    return this.http.post<Employee>(this.apiUrl, newEmployee);
  }

  updateEmployee(updatedEmployee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrl}/${updatedEmployee.id}`, updatedEmployee);
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}