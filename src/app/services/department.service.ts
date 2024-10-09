import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../models';
import { IdGeneratorService } from './id-generator.service'; 

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl = 'api/departments'; // URL to the in-memory web API

  constructor(private http: HttpClient, private idGenerator: IdGeneratorService) {}

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl);
  }

  addDepartment(department: Department): Observable<Department> {
    const newDepartment = { ...department, id: this.idGenerator.generateDepartmentId() }; // Assign unique ID
    return this.http.post<Department>(this.apiUrl, newDepartment);
  }

  updateDepartment(updatedDepartment: Department): Observable<Department> {
    return this.http.put<Department>(`${this.apiUrl}/${updatedDepartment.id}`, updatedDepartment);
  }

  deleteDepartment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}