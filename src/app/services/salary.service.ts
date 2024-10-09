import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salary } from '../models';
import { IdGeneratorService } from './id-generator.service'; 

@Injectable({
  providedIn: 'root'
})
export class SalaryService {
  private apiUrl = 'api/salaries'; 

  constructor(private http: HttpClient, private idGenerator: IdGeneratorService) {}

  getSalaries(): Observable<Salary[]> {
    return this.http.get<Salary[]>(this.apiUrl);
  }

  addSalary(salary: Salary): Observable<Salary> {
    const newSalary = { ...salary, id: this.idGenerator.generateSalaryId() }; // Assign unique ID
    return this.http.post<Salary>(this.apiUrl, newSalary);
  }

  updateSalary(updatedSalary: Salary): Observable<Salary> {
    return this.http.put<Salary>(`${this.apiUrl}/${updatedSalary.id}`, updatedSalary);
  }

  deleteSalary(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}