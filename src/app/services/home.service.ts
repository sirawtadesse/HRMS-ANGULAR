import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidate } from '../models';
import { Company } from '../models';
import { Employee } from '../models';
import { Department } from '../models';
import { Salary } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = 'api'; // Base URL for the in-memory web API

  constructor(private http: HttpClient) {}

  getCandidates(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(`${this.apiUrl}/candidates`);
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.apiUrl}/companies`);
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/employees`);
  }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiUrl}/departments`);
  }

  getSalaries(): Observable<Salary[]> {
    return this.http.get<Salary[]>(`${this.apiUrl}/salaries`);
  }
}