import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models';
import { IdGeneratorService } from './id-generator.service'; 

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = 'api/companies'; // URL to the in-memory web API

  constructor(private http: HttpClient, private idGenerator: IdGeneratorService) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl);
  }

  addCompany(company: Company): Observable<Company> {
    const newCompany = { ...company, id: this.idGenerator.generateCompanyId() }; // Assign unique ID
    return this.http.post<Company>(this.apiUrl, newCompany);
  }

  updateCompany(updatedCompany: Company): Observable<Company> {
    return this.http.put<Company>(`${this.apiUrl}/${updatedCompany.id}`, updatedCompany);
  }

  deleteCompany(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}